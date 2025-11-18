# Server (Firebase Cloud Functions) — Lingua Quest

This folder contains the Cloud Functions project used for backend logic: SRS scheduling, transactions, and user initialization.

Getting started:

1. Install Firebase CLI: `npm install -g firebase-tools` and login: `firebase login`.
2. Go to `server/functions` and install dependencies: `npm install`.
3. Emulate locally: `npm run emulators` (requires `firebase.json` configured).
4. Deploy: `firebase deploy --only functions` (requires Firebase project configured).

Important:
- Keep service account keys and sensitive config out of the repo. Use `firebase functions:config:set` for secrets.
- Implement Firestore security rules before opening the project publicly.
