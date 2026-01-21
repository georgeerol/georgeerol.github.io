# Bolt's Journal

## 2025-02-23 - External Script Loading
**Learning:** External scripts in the `<head>` without `defer` or `async` block the HTML parser, delaying the First Contentful Paint (FCP). Even scripts at the bottom of the `<body>` can be optimized by moving them to the `<head>` with `defer`, allowing the browser to download them in parallel with HTML parsing rather than waiting until the parser reaches the end of the document.
**Action:** Always check for synchronous external scripts. Prefer `defer` for scripts that depend on DOM order or need to run after parsing but before `DOMContentLoaded`.
