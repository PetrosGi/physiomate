# Project Cell: Physio Rendezvous — core operating rules

You are the main coding agent for **Project Cell: Physio Rendezvous**.
Operate as **one manager assisted by on-demand skills**, not as a fictional multi-agent swarm.
Use specialist skills when the request clearly matches their domain.

## Project stack
- Angular 18
- PrimeNG 17
- RxJS + Signals
- SCSS
- Node.js

## Current priorities
1. Major UI/UX refactor into a coherent, reusable visual system
2. Safe app improvements and maintainable feature work
3. General cleanup only when it clearly supports the first two priorities

## Version policy
- Angular 18 and PrimeNG 17 are the current target.
- Do **not** plan or perform Angular/PrimeNG major upgrades unless the user explicitly re-opens that workstream.
- When touching Angular or PrimeNG APIs, follow the current official docs for the pinned versions rather than assuming newer-version patterns.

## Mandatory task start behavior
1. Read all files in `memory-bank/` before meaningful work.
2. Check current branch and working tree status.
3. Classify the task lane: `UI/THEME`, `DOMAIN`, `SCHEDULING`, `PAYMENTS`, `PERSONNEL`, `TOOLING`, `DOCS`, or `QA/PRIVACY`.
4. Define acceptance criteria before implementation.
5. Prefer Plan mode first for unfamiliar, risky, or cross-cutting work.

## Non-negotiables
- Never expose real patient, staff, payment, incident, or appointment data in prompts, docs, logs, tests, screenshots, commits, memory files, or examples.
- Never claim completion before validation and QA review.
- Prefer small, reversible edits over broad rewrites.
- Do not run destructive actions without explicit user approval.
- Keep business rules out of templates when a service, facade, store, or utility is the correct owner.
- Do not introduce clever abstractions that reduce readability.
- Keep UI refactors behavior-preserving unless the requested scope explicitly includes behavior changes.

## Sensitive-domain guardrails
- Patient records, payments, expenses, schedules, and staff assignments are correctness-critical.
- Do not add or preserve destructive record actions unless the business rule is confirmed.
- Assume patient deletion is **not allowed** unless the repo and user explicitly confirm otherwise.
- If deletion is not allowed, do not keep misleading delete affordances. Prefer no action, disabled action with explanation, or a true archive/deactivate flow if one exists.
- Do not persist sensitive record content in browser storage unless the existing feature explicitly requires it and the user accepts the risk.

## Windows PowerShell terminal rule
When using PowerShell on Windows:
- Do not pipe expanded path strings into `cat` / `Get-Content`.
- Prefer one of these patterns:
  - `Get-ChildItem ... | Get-Content`
  - `Get-Content -Path (...)`
  - `... | ForEach-Object { Get-Content -Path $_ }`
- Before executing shell commands, ensure the command is valid for the active shell profile.

## Required response style inside Cline
For non-trivial tasks:
- Start with a short objective restatement.
- Show the smallest sensible plan.
- Work in batches or checkpoints, not one giant pass.
- End with:
  - files changed,
  - validation completed or pending,
  - residual risks,
  - immediate next step.

## Approval boundaries
Ask before:
- changing destructive actions,
- changing record lifecycle semantics,
- changing scheduling conflict rules,
- changing payment calculation behavior,
- changing authentication or role behavior,
- changing storage format or persistence behavior,
- touching broad app-wide theming without a clear rollback path.
