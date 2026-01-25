## 2026-01-25 - The Weight of Animation
**Learning:** Large unoptimized GIFs (totaling >140MB) in `index.md` are a massive performance bottleneck. Eager loading these assets severely impacts initial page load time and bandwidth usage.
**Action:** Always check media assets in static sites. For large GIFs that cannot be immediately converted to video (due to tooling limits), applying `loading="lazy"` and `decoding="async"` is a critical first-step optimization to defer loading until necessary.
