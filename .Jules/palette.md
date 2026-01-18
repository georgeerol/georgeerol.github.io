## 2026-01-24 - Accessibility in Static Sites
**Learning:** In Jekyll/Markdown sites without a build environment, implementing "Skip to Content" requires careful coordination between `_layouts` (for the link) and Markdown content (for the target ID). The target ID can be added directly to HTML wrappers within the Markdown file.
**Action:** When working on static sites, always verify the final HTML structure to ensure ID targets are correctly placed and accessible. Use temporary assembly scripts for verification if the build tool is unavailable.
