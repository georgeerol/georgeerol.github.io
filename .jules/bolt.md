## 2026-01-31 - Massive GIF Assets
**Learning:** The `images/` directory contains over 114MB of GIFs used on the homepage (`SelfDrivingCarBehavioralCloning.gif` alone is 53MB). This causes massive initial payload size.
**Action:** Always check `images/` directory sizes in this repo. Future work should convert these to WebM/MP4 videos, as `loading="lazy"` only mitigates the initial load but doesn't solve the bandwidth cost for users who scroll down.
