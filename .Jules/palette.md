## 2026-01-31 - [Fixed Positioning Conflicts]
**Learning:** The "AI Assistant" component uses a fixed position in the bottom-right corner (`bottom: 30px`, `right: 30px`), creating a "dead zone" for other floating elements like "Back to Top" buttons.
**Action:** Always check `assets/css/ai-assistant.css` or visually inspect the bottom-right quadrant before adding new fixed elements. Stack elements vertically (e.g., `bottom: 110px`) to preserve accessibility for both controls.
