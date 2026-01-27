## 2026-01-27 - [Massive GIF Payload & Blocking Scripts]
**Learning:** The `images/` directory contains >200MB of GIFs (e.g., `FollowMeGif.gif` is 23MB!). Relying on memory for optimization status is dangerous; memory stated `defer` was present on Lucide scripts, but `grep` proved it wasn't. Always verify the *actual* code.
**Action:** Always check file sizes (`ls -lh`) before assuming optimization status. Use `loading="lazy"` aggressively for large assets below the fold. Verify existing attributes with `grep` before planning.
