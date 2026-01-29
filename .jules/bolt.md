## 2024-05-22 - Large GIF Assets & Memory Discrepancy
**Learning:** Found >100MB of GIF assets in `images/` directory. Although memory stated `loading="lazy"` was applied, verification showed they were missing.
**Action:** Always verify "known" state with `read_file` or `grep`. Optimize GIFs by converting to video/WebP in future, but immediate lazy loading provides massive quick win.
