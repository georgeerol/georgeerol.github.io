## 2025-01-01 - [Massive GIF Bandwidth Hog]
**Learning:** The portfolio page contains over 200MB of GIF images, with individual files up to 53MB. Eager loading these assets causes a massive initial bandwidth spike and delayed interactivity.
**Action:** Implementing native `loading="lazy"` on these images is a critical first step. Future optimizations should convert these GIFs to optimized video formats (WebM/MP4) which would reduce size by ~90%.
