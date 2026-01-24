## 2026-01-24 - [Custom Interactive Elements Accessibility]
**Learning:** Custom interactive elements (like `div`s used as buttons) are invisible to screen readers and keyboard users by default. They require manual addition of `role="button"`, `tabindex="0"`, `aria-label`, and keyboard event handlers (`onkeydown`/`onkeyup`) to be accessible.
**Action:** Always inspect `onclick` handlers on non-button elements and enforce adding semantic attributes and keyboard support during code reviews or refactoring.
