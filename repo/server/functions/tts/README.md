TTS Pipeline — Overview

This folder contains two example approaches to generate pronunciation audio (MP3) for vocabulary words.

1) Google Cloud Text-to-Speech (recommended for production prototypes)
- Node script: `gcloud_tts.ts`
- Requirements: service account with `Text-to-Speech` permissions, set `GOOGLE_APPLICATION_CREDENTIALS` to the JSON key, and set `FIREBASE_PROJECT_ID` if uploading to Firebase Storage in a different project.
- Installs: `npm ci` (already includes `@google-cloud/text-to-speech` in `package.json`).

Usage (Google Cloud option):

```powershell
cd 'e:/game 1811/repo/server/functions'
npm ci
# synthesize and upload words listed in ../../vocab_1000.csv
node -r ts-node/register tts/gcloud_tts.ts ../../vocab_1000.csv
```

The script will:
- Read a CSV of words (headers: `word,level,pos,ipa,definition,example,vietnamese`).
- Synthesize each `word` into an MP3 using Google Cloud TTS.
- Upload the MP3 to Firebase Storage under `audio/pronunciations/{word}.mp3` (requires `firebase-admin` initialized with credentials or emulator configured).

2) Coqui TTS (open-source, local)
- Python script: `coqui_generate.py`
- Requirements: Python 3.8+, install `TTS` via pip.

Usage (Coqui):

```powershell
cd 'e:/game 1811/repo/server/functions/tts'
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r coqui_requirements.txt
python coqui_generate.py ../../vocab_1000.csv out_audio
```

This will produce MP3s into `out_audio/word.mp3`. Uploading to Storage can be done separately (CLI or `gsutil`).

Security & Cost notes
- Google Cloud TTS is paid beyond free tier; monitor usage and use rate limits for batches.
- Coqui is free but requires local resources (GPU recommended for fast synthesis).

Pick the approach that fits your constraints. The Google script includes upload steps and is ready for CI/emulator use; the Coqui script is a local fallback for non-commercial or offline workflows.
