## 2026-01-26 - Skip Link Implementation in Single-Page Jekyll Layouts
**Learning:** In Jekyll sites where navigation is embedded in the content file (`index.md`) rather than the layout, standard skip links pointing to `main` tags might fail if the `main` tag wraps the content including the navigation.
**Action:** Always verify the "main content" start point within the rendered HTML structure. If navigation is part of the content body, manually add an ID (e.g., `#main-content`) to the first content section (like a hero section) to ensure the skip link effectively bypasses the navigation.
