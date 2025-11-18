# Firebase Deploy Checklist

Before deploying Cloud Functions to production, follow this checklist.

1. Firebase project
   - Create a Firebase project in the Firebase Console.
   - Note the Project ID and replace `lingua-quest-dev` in `.firebaserc`.

2. Local environment
   - Install Node.js 16+ and Firebase CLI: `npm install -g firebase-tools`.
   - Login: `firebase login`.
   - Initialize (if needed): `firebase init functions`.

3. Secrets & config
   - Set environment config via Firebase: `firebase functions:config:set algos.some_key="value"`.
   - Add `FIREBASE_TOKEN` as a GitHub secret for CI deployment (generate with `firebase login:ci`).

4. Firestore rules
   - Prepare and test Firestore security rules before writing production data.

5. Test locally
   - Run emulators: `firebase emulators:start --only functions,firestore,auth`.
   - Seed sample vocabulary: call the `seedVocabulary` HTTP function (only for dev).

6. Deploy
   - From `repo/server/functions`: run `npm ci && npm run build`.
   - Deploy: `firebase deploy --only functions`.

7. Post-deploy checks
   - Validate Cloud Function logs: `firebase functions:logs` or check Stackdriver.
   - Verify Firestore documents and rules.

Notes
- Do not commit service account keys to the repo. Use Firebase config and GitHub secrets.
- For production, consider separate projects for dev/staging/prod and use `.firebaserc` project aliases.
