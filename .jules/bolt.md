## 2025-01-28 - Verification of Memory vs Reality
**Learning:** Memory stated that 'loading=lazy' was applied to large GIFs, but grep verification proved otherwise. The codebase state did not match the provided context.
**Action:** Always strictly verify the existence of optimizations using grep or file inspection before assuming they are present, regardless of what documentation/memory claims.
