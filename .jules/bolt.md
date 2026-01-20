# Bolt's Journal

## 2025-01-20 - Massive GIF Bottleneck
**Learning:** This repository stores unoptimized GIFs directly in the `images/` folder (e.g., `SelfDrivingCarBehavioralCloning.gif` is 53MB!). This is a massive performance killer for bandwidth and load times.
**Action:** Always check `ls -lh images/` first. Immediate action is to enforce `loading="lazy"` on all images below the fold. Future optimization should involve converting these GIFs to MP4/WebM or hosting them externally.
