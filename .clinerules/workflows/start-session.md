# Start or resume a Physio Rendezvous session

Use this workflow at the beginning of a new conversation or when resuming after a break.

## Steps
1. Read all files in `memory-bank/`.
2. Run `git status --short --branch`.
3. Inspect the project entry points needed to orient quickly. Typical first files:
   - `package.json`
   - Angular workspace config
   - app bootstrap
   - routes or main shells
   - feature entry points
   - main style/theme entry points
4. If `memory-bank/repoMap.md` is missing or stale, create/update it.
5. Summarize:
   - current branch and worktree status,
   - current priorities,
   - main feature boundaries,
   - sensitive-data hotspots,
   - likely next highest-value task.
6. Do **not** implement yet unless the user already asked for implementation.
7. If the user asked for planning, stay in Plan mode and propose acceptance criteria plus task buckets.
