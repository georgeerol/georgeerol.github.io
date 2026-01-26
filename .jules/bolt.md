## 2025-01-26 - Massive GIF Assets Bottleneck
**Learning:** The project relies on several unoptimized GIF assets exceeding 50MB (e.g., `SelfDrivingCarBehavioralCloning.gif`) loaded via standard `<img>` tags in `index.md`. These lacked `loading='lazy'` and `decoding='async'` attributes, causing significant bandwidth consumption and main-thread blocking during initial page load.
**Action:** Always verify asset sizes in `images/` and enforce lazy loading for all heavy media below the fold. Consider migrating GIFs to optimized video formats (WebM/MP4) in future iterations.
