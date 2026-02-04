## 2025-02-04 - Massive GIFs in Index
**Learning:** The `images/` directory contains extremely large GIFs (up to 53MB), and `index.md` was loading them eagerly. This creates a massive bandwidth bottleneck (~200MB payload) on the initial load.
**Action:** Always check asset sizes in static sites. For future, recommend converting these GIFs to WebM/MP4 videos for 90%+ size reduction. Lazy loading helps bandwidth but video optimization is the real fix needed.
