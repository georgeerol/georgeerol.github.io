## 2026-01-24 - Huge GIF Assets
**Learning:** The `images/` directory contains over 125MB of GIFs (e.g., `SelfDrivingCarBehavioralCloning.gif` is 53MB). This is a massive performance bottleneck.
**Action:** Implemented `loading="lazy"` to mitigate impact. Future optimization should convert these to optimized video formats (WebM/MP4) or highly compressed WebP to reduce file size by ~90%.
