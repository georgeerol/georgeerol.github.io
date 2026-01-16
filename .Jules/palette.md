## 2024-05-23 - Accessibility Gaps in Custom Controls
**Learning:** The site relies on `div` elements with `onclick` handlers for interactive controls (like the theme toggle) without `role="button"`, `tabindex="0"`, or keyboard event listeners. This makes them inaccessible to keyboard and screen reader users. Additionally, global focus indicators were missing.
**Action:** When auditing custom interactive components, always verify keyboard accessibility (Enter/Space support, focus states) and semantic roles. Standardize on `<button>` or complete ARIA patterns.
