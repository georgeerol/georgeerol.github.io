## 2026-01-13 - [Offline Verification of Jekyll Performance]
**Learning:** Verifying frontend performance changes (like `defer` and `lazy loading`) in a static Jekyll site without a build environment requires creating a simplified build script to simulate the HTML generation and a Playwright script to assert the DOM attributes.
**Action:** Use `tools/build_verification.py` pattern for future frontend attribute checks when full build is unavailable.
