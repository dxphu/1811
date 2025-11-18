import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import computeSm2 from './srs';

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
