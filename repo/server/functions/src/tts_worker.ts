import textToSpeech from '@google-cloud/text-to-speech';
import * as admin from 'firebase-admin';

const client = new textToSpeech.TextToSpeechClient();

/**
 * Generate TTS audio for a single word and upload to Storage.
 * Returns the storage path on success (e.g., `audio/pronunciations/word.mp3`) or null on failure.
 */
export async function generateAudioForWord(word: string, vocabRecord: any): Promise<string | null> {
  try {
    if (!word) return null;
    const sanitized = String(word).replace(/[^a-z0-9_-]/gi, '_');
    const destPath = `audio/pronunciations/${sanitized}.mp3`;

    const request: any = {
      input: { text: word },
      voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
      audioConfig: { audioEncoding: 'MP3' },
    };

    const [response] = await client.synthesizeSpeech(request);
    const audioContent = response.audioContent as Buffer | undefined;
    if (!audioContent) return null;

    const bucket = admin.storage().bucket();
    const file = bucket.file(destPath);
    await file.save(audioContent, { contentType: 'audio/mpeg' });
    return destPath;
  } catch (err) {
    console.error('generateAudioForWord error', err);
    return null;
  }
}

export default generateAudioForWord;
