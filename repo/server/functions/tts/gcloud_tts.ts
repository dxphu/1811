import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'csv-parse/sync';
import textToSpeech from '@google-cloud/text-to-speech';
import * as admin from 'firebase-admin';

async function main() {
  const csvPath = process.argv[2] ? path.resolve(process.argv[2]) : path.join(__dirname, '../../vocab_1000.csv');
  if (!fs.existsSync(csvPath)) {
    console.error('CSV not found:', csvPath);
    process.exit(1);
  }
  const content = fs.readFileSync(csvPath, 'utf8');
  const records = parse(content, { columns: true, skip_empty_lines: true });
  console.log(`Found ${records.length} words`);

  // Initialize Admin SDK. Ensure GOOGLE_APPLICATION_CREDENTIALS is set for service account key
  admin.initializeApp({ projectId: process.env.FIREBASE_PROJECT_ID || undefined });
  const bucket = admin.storage().bucket();

  const client = new textToSpeech.TextToSpeechClient();

  for (const row of records) {
    const word = (row.word || '').trim();
    if (!word) continue;
    try {
      const request = {
        input: { text: word },
        voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
        audioConfig: { audioEncoding: 'MP3' },
      } as any;
      const [response] = await client.synthesizeSpeech(request as any);
      const audioContent = response.audioContent as Buffer | undefined;
      if (!audioContent) {
        console.warn('No audio for', word);
        continue;
      }
      const destPath = `audio/pronunciations/${word}.mp3`;
      const file = bucket.file(destPath);
      await file.save(audioContent, { contentType: 'audio/mpeg' });
      console.log('Uploaded', destPath);
    } catch (err) {
      console.error('Error generating', word, err);
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
