## 2024-05-22 - Skip Link Implementation & Architecture
**Learning:** The site's navigation is embedded in `index.md` rather than the layout. This forces accessibility features like 'Skip to Content' to target elements within the content file, creating a dependency between the layout (where the link lives) and specific content pages.
**Action:** When adding global accessibility features, first map the DOM structure to identify where 'global' elements (nav, footer) actually live. Future refactor: Move navigation to `_layouts/default.html` or an include.
