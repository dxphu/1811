# Architecture Overview — Lingua Quest

This document summarizes the recommended architecture for the Lingua Quest MVP.

Core choices:
- Client: Unity (recommended) or React Native.
- Backend: Firebase (Auth, Firestore, Storage, Cloud Functions, FCM, Remote Config).
- Analytics: Firebase Analytics + Crashlytics.

Key components:
- Firestore collections: `users`, `vocabulary`, `memory_vault` (per-user), `user_buildings`, `leaderboards`, `transactions`.
- Cloud Functions:
  - `onUserCreate`: create initial user document.
  - `dailySrsJob`: compute review queues and optionally send push reminders.
  - `transactions`: validate purchases.
- Storage: store audio (`/audio/{word}.mp3`) and images (`/images/{id}.png`).

Security & Deployment:
- Use Firestore security rules to protect against cheating.
- Use `firebase functions:config:set` for secrets and environment config.
- CI/CD: GitHub Actions to build and deploy functions; App Center or Play/App Store pipelines for mobile builds.

Reference: see `tech_stack_and_schema.md` for detailed schema and SRS suggestions.
