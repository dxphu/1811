Seed vocabulary README

This folder contains Cloud Functions and auxiliary scripts.

Seed script: `scripts/seedVocab.ts`

Usage (from `repo/server/functions`):

1. Install dependencies:

```powershell
npm ci
```

2. To seed into Firestore emulator (recommended during development):

```powershell
# start emulator in another shell
npm run serve
# then run seed (emulator listens to FIRESTORE_EMULATOR_HOST)
npm run seed:vocab
```

3. To seed into a real project (careful):

```powershell
# set project id env var if needed
$env:FIREBASE_PROJECT_ID = 'your-project-id'; npm run seed:vocab
```

Notes:
- The script reads `../../vocab_1000.csv` by default. Optionally pass a path: `ts-node scripts/seedVocab.ts path/to/file.csv`.
- The script writes documents to the `vocabulary` collection using the `word` field as the document id when present.
- Commits are batched (500 docs per batch) to respect Firestore limits.
