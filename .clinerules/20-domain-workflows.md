---
paths:
  - "src/**/*.service.ts"
  - "src/**/*.store.ts"
  - "src/**/*.facade.ts"
  - "src/**/*.model.ts"
  - "src/**/*.types.ts"
  - "src/**/*.interface.ts"
  - "src/**/*.guard.ts"
  - "src/**/*.resolver.ts"
  - "src/**/*.spec.ts"
  - "src/app/**"
---

# Domain workflow rules

Apply this rule when working on patient records, personnel, rendezvous scheduling, payments, expenses, validation, state transitions, or domain services.

## Correctness-critical areas
- patient record integrity
- personnel schedule integrity
- rendezvous scheduling and conflict handling
- payment and expense calculations
- status transitions and validation rules

## Engineering guidance
- Keep business rules explicit and testable.
- Prefer services, facades, stores, or pure utilities over template logic.
- Make invariants visible in code and in tests.
- Treat destructive or irreversible actions as product decisions, not default UI actions.

## Product guardrail
- Do not invent delete/archive semantics.
- If the product does not support deleting patients, do not create UI or logic that implies it does.
- If the repo exposes a delete affordance with no valid backend/domain path, flag it as a follow-up issue rather than guessing behavior.

## Validation focus
Check the affected flow with synthetic data:
- create / edit / read paths
- validation errors
- totals or calculations
- conflict detection
- success, empty, and failure states
