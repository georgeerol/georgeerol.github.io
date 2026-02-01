## 2025-02-18 - Accessibility: Skip to Content
**Learning:** Static sites with sticky headers and JS-based smooth scrolling need careful handling for "Skip to Content" links. The JS smooth scrolling must explicitly exclude the skip link to allow the browser's default focus behavior (instant jump), otherwise the focus management fails.
**Action:** Always verify skip links with smooth scrolling disabled or excluded, and ensure the target ID exists on the main content container.
