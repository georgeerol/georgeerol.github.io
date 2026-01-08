## 2026-01-08 - [Lazy Loading Strategy for Portfolio Images]
**Learning:** Large media assets (GIFs/PNGs) in a single-page portfolio can significantly impact initial load performance.
**Action:** Implemented `loading="lazy"` on all images below the fold, while explicitly keeping the hero section profile image eager-loaded to prioritize LCP.
