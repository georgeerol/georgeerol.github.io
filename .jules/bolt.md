## 2025-05-15 - Lucide Icon Initialization Pattern
**Learning:** The `lucide` icons script is included as a render-blocking resource in `_layouts/default.html`. However, the initialization `lucide.createIcons()` is correctly wrapped in `DOMContentLoaded`.
**Action:** It is safe to add the `defer` attribute to the `lucide` script tag to improve performance without breaking icon rendering. Always verify initialization timing when deferring scripts.
