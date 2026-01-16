## 2026-01-16 - Large GIF Assets & Lazy Loading
**Learning:** This portfolio relies heavily on large animated GIFs (>100MB total) for project demonstrations. Eager loading these assets causes massive bandwidth usage and slow initial page loads, especially on mobile networks.
**Action:** Always check `images/` folder size and use `loading="lazy"` and `decoding="async"` for all below-the-fold media, especially in image-heavy portfolio sites. Prioritize hero images with `fetchpriority="high"`.
