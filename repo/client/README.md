# Client — Lingua Quest (Guidelines)

This folder holds notes and guidance for the client implementation. Two viable options for the MVP:

Option A — Unity (recommended for rich mini-games):
- Use Unity 2021+ with Addressables for asset management.
- UI: Unity UI (uGUI) or UI Toolkit for overlays.
- Mobile build targets: iOS, Android.
- Networking: use Firebase SDK (Firestore, Auth, Storage) via REST or Unity SDK.

Option B — React Native (faster UI iteration):
- Use React Native + TypeScript for menus/UI; embed Unity modules for heavy mini-games if needed.
- Use `react-native-firebase` for backend integrations.

Starter tasks:
- Create project, connect Firebase project, implement Auth (Email + Google + Apple), and implement a sample zone screen that fetches `vocabulary` content.
- Wire top-level navigation to `Map`, `Vault`, `Store`, `Profile`.

Developer notes:
- Keep vocabulary and audio streaming efficient; use pagination and caching for offline reviews.
- Prepare an asset manifest mapping icon ids to file paths (see `artist_asset_list.json`).
