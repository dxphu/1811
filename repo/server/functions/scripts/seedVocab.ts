import * as fs from 'fs';
import * as path from 'path';
import * as admin from 'firebase-admin';
import { parse } from 'csv-parse/sync';

async function main() {
  const csvArg = process.argv[2];
  const defaultPath = path.join(__dirname, '../../vocab_1000.csv');
  const csvPath = csvArg ? path.resolve(csvArg) : defaultPath;

  if (!fs.existsSync(csvPath)) {
    console.error('CSV file not found:', csvPath);
    process.exit(1);
  }

  const content = fs.readFileSync(csvPath, 'utf8');
  const records = parse(content, { columns: true, skip_empty_lines: true });
  console.log(`Parsed ${records.length} rows from ${csvPath}`);

  // Initialize admin. If running against emulator, ensure FIRESTORE_EMULATOR_HOST is set.
  admin.initializeApp({ projectId: process.env.FIREBASE_PROJECT_ID || 'lingua-quest-dev' });
  const db = admin.firestore();

  // Commit in batches of 500 documents
  const BATCH_SIZE = 500;
  let written = 0;
  for (let i = 0; i < records.length; i += BATCH_SIZE) {
    const chunk = records.slice(i, i + BATCH_SIZE);
    const batch = db.batch();
    for (const row of chunk) {
      // expected CSV headers: word,level,pos,ipa,definition,example,vietnamese
      const id = row.word ? String(row.word).trim() : undefined;
      const docRef = id ? db.collection('vocabulary').doc(id) : db.collection('vocabulary').doc();
      const doc = {
        word: row.word || null,
        level: row.level || null,
        pos: row.pos || null,
        ipa: row.ipa || null,
        definition: row.definition || null,
        example: row.example || null,
        vietnamese: row.vietnamese || null,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      };
      batch.set(docRef, doc, { merge: true });
    }
    await batch.commit();
    written += chunk.length;
    console.log(`Committed ${written}/${records.length}`);
  }

  console.log('Seeding complete.');
  process.exit(0);
}

main().catch((err) => {
  console.error('Error seeding vocabulary:', err);
  process.exit(1);
});
