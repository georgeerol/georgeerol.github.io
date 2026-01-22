## 2025-01-22 - Large Asset Bottleneck
**Learning:** The repository relies on extremely large GIF assets (e.g., `SelfDrivingCarBehavioralCloning.gif` is 53MB) for project demos. These are currently loaded eagerly, causing massive initial page weight (>200MB total) and slow TTI.
**Action:** In the future, prioritize converting large GIFs to efficient `<video>` (WebM/MP4) tags with `autoplay loop muted`. For now, strict `loading="lazy"` and `decoding="async"` are mandatory to prevent browser freezing.
