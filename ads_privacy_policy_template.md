# Privacy & Ads — Template & Implementation Notes

This document provides a short privacy + consent template for the app when using ads.

1) Short explanation (in‑app) for users before showing ads
- "Lingua Quest hiển thị quảng cáo để hỗ trợ vận hành ứng dụng. Bạn có thể chọn quảng cáo đổi thưởng (Rewarded) để nhận thêm phần thưởng. Nếu bạn không muốn quảng cáo cá nhân hóa, vào Settings → Privacy và chọn Non‑Personalized Ads."

2) Consent flow (recommended implementation)
- On first app open (or before showing any personalized ad): show a modal explaining ads and asking consent for personalized ads.
  - Options: [Accept Personalized Ads] [Use Non‑Personalized Ads]
  - Record choice in `users/{uid}/privacy.consent` with timestamp.
- For users in EEA: follow local laws — use Google Funding Choices / Consent SDK.
- For iOS: integrate ATT prompt if any cross‑app tracking occurs.

3) Data categories to disclose
- Device identifiers (Advertising ID / IDFA)
- Basic device info for ad serving (OS, locale)
- Usage events for analytics (non‑PII unless explicit consent)

4) Minimal Privacy Policy text (public page)
- App name: Lingua Quest — The City of Words
- Data collected: anonymous analytics (Firebase Analytics), ad identifiers (for ad networks), optional account info (email if user signs up), and vocabulary progress data (user content). No selling of personal data.
- Purpose: personalize ads (if consented), improve app features, deliver push notifications.
- Third parties: list AdMob/Unity Ads and link to their privacy policies.
- Contact: support email address (e.g., support@linguaquest.example)

5) In‑app link & store listing
- Add link to Privacy Policy in app's settings and on store listing.
- Include clear language in store listing about ads and in‑app purchases (if any in future).

6) Implementation checklist
- [ ] Add consent modal and record choice to Firestore
- [ ] Add `privacy_policy_url` in app Settings pointing to public policy
- [ ] Configure AdMob/Unity Ads SDK to respect non‑personalized ad choice
- [ ] Ensure ATT / iOS tracking prompt appears only if required

Legal note: This template is a starting point — consult legal counsel for production use.
