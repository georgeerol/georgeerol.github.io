## 2024-05-23 - Huge Image Assets & Lazy Loading
**Learning:** The `images/` directory contains over 200MB of assets, including massive GIFs (up to 53MB). These were being loaded eagerly in `index.md`, causing significant performance penalties on initial load.
**Action:** Always check asset sizes in static sites. For this codebase, STRICT lazy loading (`loading="lazy"`) is mandatory for all below-the-fold images. Video assets are also large and should be monitored.
