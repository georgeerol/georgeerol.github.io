## 2025-10-26 - Missing Global Focus Indicators
**Learning:** The application had custom focus styles only for the theme toggle, leaving other interactive elements (like buttons) relying on browser defaults or having no focus state. This creates an inconsistent experience for keyboard users.
**Action:** Always verify keyboard navigation (Tab key) on all interactive elements. Apply global `:focus-visible` styles early in the CSS to ensure a baseline accessible experience.
