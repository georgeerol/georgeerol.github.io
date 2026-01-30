# Palette's Journal

## 2026-01-20 - Skip Link Implementation in Hybrid Layout
**Learning:** The site's navigation is embedded directly in the content file (`index.md`) rather than the layout file (`_layouts/default.html`). This creates a challenge for "Skip to Content" links because the target ID must be placed within the content file, not the layout.
**Action:** When implementing bypass blocks in Jekyll sites with mixed content/layout responsibility, verify where the navigation lives before placing the target anchor.
