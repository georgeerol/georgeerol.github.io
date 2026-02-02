# Palette's Journal

## Critical UX/Accessibility Learnings only.

Format: `## YYYY-MM-DD - [Title]
**Learning:** [UX/a11y insight]
**Action:** [How to apply next time]`

## 2026-01-26 - Keyboard Accessibility in SPA-like Static Sites
**Learning:** In a Jekyll site where the navigation is embedded in the content file (`index.md`) rather than the layout, a standard "Skip to content" link pointing to the layout's content wrapper will fail to skip the navigation. The target ID must be placed on the first focusable element *after* the embedded navigation within the content file itself.
**Action:** When adding skip links to static sites, always verify where the navigation lives in the DOM structure relative to the content injection point (`{{ content }}`).
