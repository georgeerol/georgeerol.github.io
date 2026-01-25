## 2026-01-XX - [Skip Link Focus Behavior]
**Learning:** Adding `tabindex="-1"` to the skip link target (`#main-content`) is critical. Without it, while the viewport scrolls, the document focus often remains on the link itself (or body), forcing the user to tab through the navigation again or get lost. Explicitly setting focusability ensures the user lands *inside* the main content area.
**Action:** Always add `tabindex="-1"` and `outline: none` (or visual indicator if appropriate) to non-interactive jump targets.
