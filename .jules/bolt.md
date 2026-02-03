## 2026-02-03 - Huge Unoptimized GIFs
**Learning:** The `images/` directory contains several massive GIFs (e.g., `SelfDrivingCarBehavioralCloning.gif` is 53MB, `rover_image.gif` is 22MB), totaling over 200MB. These were being loaded eagerly in `index.md`, causing massive network payload on initial load.
**Action:** Always check asset sizes in the repository (`ls -lh images/`) before optimizing. For such large assets, `loading="lazy"` is mandatory, but replacing them with optimized video formats (WebM/MP4) should be the long-term goal.
