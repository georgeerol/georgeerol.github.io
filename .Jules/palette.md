## 2026-01-20 - Navigation Embedded in Content
**Learning:** The site's navigation is embedded within `index.md` (content) rather than `_layouts/default.html` (layout). This complicates global accessibility features like "Skip to content" because the "content" wrapper in the layout includes the navigation itself.
**Action:** When implementing skip links, target the specific section *after* the navigation block within the content file, rather than the generic content container in the layout.
