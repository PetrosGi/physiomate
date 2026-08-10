---
name: domain-safety
description: Work on sensitive business logic with explicit correctness and privacy discipline. Use when tasks mention patients, personnel, rendezvous, schedules, payments, expenses, validation rules, totals, destructive actions, or record lifecycle changes.
---

# Domain safety

Use this skill whenever the task touches domain correctness.

## Workflow
1. Define the user outcome and the exact rule being changed or preserved.
2. Identify whether the area is patient records, personnel, scheduling, payments, expenses, or mixed.
3. Locate the owning service, store, facade, or utility.
4. Make invariants explicit before editing.
5. Keep side effects visible and keep templates thin.
6. Add or update targeted tests when feasible.

## Guardrails
- Never guess destructive-action semantics.
- Never assume deletion is allowed.
- Never change totals or scheduling behavior casually.
- Use synthetic examples only.
