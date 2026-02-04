## 2026-02-04 - Keyboard Navigation Blind Spots
**Learning:** Many static sites rely solely on browser defaults for focus states, which are often inconsistent or invisible, especially on custom buttons. This creates a significant barrier for keyboard users who cannot easily see where they are on the page.
**Action:** Always include explicit `:focus-visible` styles in the global CSS reset or base styles. Using `outline-offset` improves visibility against different background colors.
