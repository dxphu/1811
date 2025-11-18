import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import computeSm2 from './srs';
import { generateAudioForWord } from './tts_worker';

admin.initializeApp();
const db = admin.firestore();

// Trigger: when a new user signs up, create a users document
export const onUserCreate = functions.auth.user().onCreate(async (user) => {
  const userDoc = {
    uid: user.uid,
    displayName: user.displayName || null,
    email: user.email || null,
    xp: 0,
    gold: 0,
    gems: 0,
    level: 1,
    streak: { count: 0, lastDate: admin.firestore.FieldValue.serverTimestamp() },
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  };
  await db.collection('users').doc(user.uid).set(userDoc);
  return null;
});

// Firestore trigger: enqueue newly created vocabulary items for TTS if they lack audio
export const ttsEnqueue = functions.firestore
  .document('vocabulary/{wordId}')
  .onCreate(async (snap, context) => {
    try {
      const data = snap.data();
      const wordId = context.params.wordId;
      if (!data) return null;
      if (data.audioUrl) {
        functions.logger.info('Skipping enqueue; audioUrl present', { wordId });
        return null;
      }
      await db.collection('tts_queue').doc(wordId).set({
        word: data.word || null,
        status: 'pending',
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });
      functions.logger.info('Enqueued for TTS', { wordId });
      return null;
    } catch (err) {
      functions.logger.error('ttsEnqueue error', err);
      return null;
    }
  });

// HTTP worker: process one queued TTS item (POST { wordId }) — useful for manual runs or a worker
export const ttsProcessOne = functions.https.onRequest(async (req, res) => {
  try {
    if (req.method !== 'POST') {
      res.status(405).send('Use POST');
      return;
    }
    const { wordId } = req.body || {};
    if (!wordId) {
      res.status(400).send('Provide JSON body with `wordId`');
      return;
    }
    const queueRef = db.collection('tts_queue').doc(wordId);
    const queueSnap = await queueRef.get();
    if (!queueSnap.exists) {
      res.status(404).send('Queue item not found');
      return;
    }
    const queue = queueSnap.data();
    if (queue?.status !== 'pending') {
      res.status(400).send('Queue item not pending');
      return;
    }
    const vocabRef = db.collection('vocabulary').doc(wordId);
    const vocabSnap = await vocabRef.get();
    if (!vocabSnap.exists) {
      await queueRef.update({ status: 'error', error: 'vocab_missing' });
      res.status(404).send('Vocabulary item missing');
      return;
    }
    const vocab = vocabSnap.data() || {};
    // generate audio and upload to storage
    const audioPath = await generateAudioForWord(vocab.word, vocab);
    if (!audioPath) {
      await queueRef.update({ status: 'error', error: 'tts_failed' });
      res.status(500).send('TTS generation failed');
      return;
    }
    const publicUrl = `gs://${admin.storage().bucket().name}/${audioPath}`;
    await vocabRef.update({ audioUrl: publicUrl });
    await queueRef.update({ status: 'done', audioPath, completedAt: admin.firestore.FieldValue.serverTimestamp() });
    res.status(200).json({ audioPath });
  } catch (err) {
    functions.logger.error('ttsProcessOne error', err);
    res.status(500).send('Error processing TTS');
  }
});

// Scheduled processor: run every 5 minutes and process up to N pending queue items
export const ttsBatchProcessor = functions.pubsub.schedule('every 5 minutes').onRun(async (context) => {
  const BATCH_SIZE = 10;
  try {
    // Query pending items
    const pendingQuery = db.collection('tts_queue').where('status', '==', 'pending').limit(BATCH_SIZE);
    const pendingSnap = await pendingQuery.get();
    if (pendingSnap.empty) {
      functions.logger.info('No pending TTS items');
      return null;
    }

    for (const doc of pendingSnap.docs) {
      const wordId = doc.id;
      const queueRef = db.collection('tts_queue').doc(wordId);
      // Try to claim the item using a transaction
      const claimed = await db.runTransaction(async (tx) => {
        const q = await tx.get(queueRef);
        if (!q.exists) return false;
        const data = q.data() as any;
        if (data.status !== 'pending') return false;
        tx.update(queueRef, { status: 'in_progress', startedAt: admin.firestore.FieldValue.serverTimestamp() });
        return true;
      });
      if (!claimed) {
        functions.logger.info('Could not claim queue item', { wordId });
        continue;
      }

      try {
        const vocabRef = db.collection('vocabulary').doc(wordId);
        const vocabSnap = await vocabRef.get();
        if (!vocabSnap.exists) {
          await db.collection('tts_queue').doc(wordId).update({ status: 'error', error: 'vocab_missing' });
          continue;
        }
        const vocab = vocabSnap.data() || {};
        const audioPath = await generateAudioForWord(vocab.word, vocab);
        if (!audioPath) {
          await db.collection('tts_queue').doc(wordId).update({ status: 'error', error: 'tts_failed' });
          continue;
        }
        const publicUrl = `gs://${admin.storage().bucket().name}/${audioPath}`;
        await vocabRef.update({ audioUrl: publicUrl });
        await db.collection('tts_queue').doc(wordId).update({ status: 'done', audioPath, completedAt: admin.firestore.FieldValue.serverTimestamp() });
      } catch (err) {
        functions.logger.error('Error processing queued TTS item', err);
        await db.collection('tts_queue').doc(wordId).update({ status: 'error', error: String(err) });
      }
    }
    return null;
  } catch (err) {
    functions.logger.error('ttsBatchProcessor error', err);
    return null;
  }
});

// Daily job: compute SRS review queue and send notification (simple placeholder)
export const dailySrsJob = functions.pubsub.schedule('every 24 hours').onRun(async (context) => {
  // NOTE: production should iterate users in batches and compute review queues server-side.
  // This placeholder only logs execution — implement logic to compute nextReview dates
  functions.logger.info('dailySrsJob executed', { time: context.timestamp });
  // Example: find users with reviews due — simplified pseudocode
  // const usersSnapshot = await db.collection('users').limit(100).get();
  // for (const doc of usersSnapshot.docs) { /* compute review queue & send push */ }
  return null;
});

// HTTP function: seed sample vocabulary (protected in production)
export const seedVocabulary = functions.https.onRequest(async (req, res) => {
  try {
    const sample = [
      { word: 'apple', level: 'A1', pos: 'noun', definition: 'A round fruit', example: 'I ate an apple.', ipa: '/ˈæpəl/' }
    ];
    const batch = db.batch();
    sample.forEach((w) => {
      const ref = db.collection('vocabulary').doc(w.word);
      batch.set(ref, w, { merge: true });
    });
    await batch.commit();
    res.status(200).send('Vocabulary seeded');
  } catch (err) {
    functions.logger.error('seedVocabulary error', err);
    res.status(500).send('Error');
  }
});

// HTTP debug endpoint: compute next SRS state for a provided card and quality
export const runSrsForUser = functions.https.onRequest(async (req, res) => {
  try {
    if (req.method !== 'POST') {
      res.status(405).send('Use POST');
      return;
    }
    const { card, quality } = req.body || {};
    if (!card || typeof quality !== 'number') {
      res.status(400).send('Provide JSON body with `card` and numeric `quality`');
      return;
    }
    const state = {
      repetitions: card.repetitions || 0,
      interval: card.interval || 0,
      ef: card.ef || 2.5,
    };
    const next = computeSm2(state, quality);
    res.status(200).json({ next });
  } catch (err) {
    functions.logger.error('runSrsForUser error', err);
    res.status(500).send('Error computing SRS');
  }
});
