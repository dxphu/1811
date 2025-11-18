# Monetization Policy — Non‑Commercial with Light Ads

Project decision:
- Lingua Quest sẽ được phát triển như một dự án **phi thương mại** (non‑commercial). Không có tính năng mua bán (no in‑app purchases), không bán Gems/Currencies.
- Để duy trì hoạt động, ứng dụng sẽ hiển thị **quảng cáo không xâm phạm** theo tần suất hạn chế (interstitial/rewarded) và/hoặc link affiliate có thể hiện dưới dạng "Watch ad to continue / Watch ad to get revive".

Principles:
- **No paywall:** Tất cả nội dung học cơ bản và tiến độ thành phố phải có thể mở khóa hoàn toàn bằng gameplay và phần thưởng in‑game (Gold, Gems earned), không cần mua.
- **Optional rewarded ads only for convenience:** Khuyến nghị dùng rewarded video để người dùng tự chọn (ví dụ: revive, double XP for next run). Tránh autoplay or forced ads between every level.
- **Limited interstitials:** Interstitials only at natural breakpoints (e.g., after finishing a zone or opt‑in flow), max 1–2 per session by default.
- **No ads for core onboarding:** Không hiển thị quảng cáo trong luồng onboarding và Day‑1 Legendary Expedition rewards để giữ trải nghiệm tốt cho retention.
- **Transparency:** Luôn hiển thị badge/label "Ad" khi nội dung là quảng cáo và có link đến chính sách riêng tư.

Recommended ad placements:
- Rewarded Video: Revive in Word Arena, extra hint, or double rewards for a limited period.
- Interstitial: After completing a zone (not after every level); optionally suppressed during streaks.
- Banner: Avoid persistent banners that interfere with gameplay; if used, place in low‑impact area (profile/store screens only).

Ad providers (options):
- Google AdMob (recommended for mobile): widely supported, easy to integrate, supports rewarded and interstitial. Free to use; revenue share with Google.
- Unity Ads: good for rewarded video, especially if using Unity client.
- Alternative/ad mediation: AdMob Mediation, IronSource, or MoPub (note: check policy & availability by region).

Privacy & Consent requirements:
- If ads use personalized targeting, obtain explicit consent for tracking (GDPR/CCPA) and provide non‑personalized ads option.
- Use Google’s Consent SDK or own consent flow to record consent choices in Firestore.
- Provide clear Privacy Policy and an in‑app link to it.

Legal & App Store considerations:
- Apple App Store may require disclosure of ad networks and tracking practices (App Privacy details). Follow App Tracking Transparency (ATT) for iOS.
- Google Play requires disclosure of ads and any data collected for personalized ads.

Developer notes:
- Remove payment flows and Stripe/Paddle code from the codebase to avoid accidental integration.
- Keep Gems/Avatar cosmetics purchasable only via earned rewards or affiliate links (no direct sales).
- Prepare a lightweight analytics plan to monitor ad impact on retention (A/B test ad frequency). Use Firebase Analytics events to track "ad_shown", "ad_rewarded", "ad_closed", and correlate with retention events.

Transition guidance if later switching to commercial:
- Design currency system so Gems can be enabled as purchasable later without changing core progression (feature flag gating).

