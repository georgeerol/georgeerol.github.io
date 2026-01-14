## 2026-01-28 - Massive GIF Assets
**Learning:** The `images/` directory contains over 200MB of GIF assets (e.g., `SelfDrivingCarBehavioralCloning.gif` is 53MB). Without lazy loading, the initial page load is catastrophic on slower connections.
**Action:** Always verify asset sizes in `images/` before optimizing. Prioritize `loading="lazy"` for all images below the fold in markdown files.
