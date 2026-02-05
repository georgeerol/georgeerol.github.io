## 2026-02-05 - Memory vs. Reality
**Learning:** Memory indicated that images were already optimized with `loading="lazy"`, but verification via `grep` showed they were not. Large GIFs (>20MB) were loading eagerly, causing significant bandwidth waste.
**Action:** Always verify the codebase state with `grep` or `read_file` before trusting memory or documentation claims about optimization status.
