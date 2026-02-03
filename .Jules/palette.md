## 2026-01-20 - Accessible Skip Links
**Learning:** Skip links work best when the JS smooth scrolling logic explicitly excludes them (`:not(.skip-link)`), preserving the browser's native focus jump behavior which is critical for keyboard navigation.
**Action:** Always verify if smooth scrolling scripts intercept anchor links and exempt accessibility shortcuts.
