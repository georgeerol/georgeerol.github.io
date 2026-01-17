## 2024-05-22 - Heavy GIF Assets & Lazy Loading
**Learning:** This portfolio contains over 200MB of GIF assets (e.g., `SelfDrivingCarBehavioralCloning.gif` is 53MB). These were being loaded eagerly on the main page, creating a massive bandwidth bottleneck for the initial load.
**Action:** Always audit `images/` directory sizes in static sites. For heavy assets like GIFs, strictly enforce `loading="lazy"` and `decoding="async"`. Ensure the hero image uses `fetchpriority="high"` to optimize LCP while deferring the rest.
