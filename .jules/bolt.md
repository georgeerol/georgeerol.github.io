## 2026-01-19 - Massive GIF Assets
**Learning:** The `images/` directory contains over 200MB of GIFs (e.g., `SelfDrivingCarBehavioralCloning.gif` is 53MB). Without `loading="lazy"`, the initial page load is disastrously heavy.
**Action:** Always verify asset sizes in `images/` before optimizing. Future work should compress these GIFs or convert them to WebM/MP4.
