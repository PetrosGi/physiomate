---
name: senior-qa-privacy
description: Perform a final senior-level review for correctness, scope control, and privacy hygiene. Use when a task is non-trivial, touches multiple files, changes UI structure, modifies domain logic, or before reporting completion.
---

# Senior QA and privacy review

Use this skill as the final reviewer before calling work complete.

## Review dimensions
- Correctness
- Readability and maintainability
- Scope control
- Regression risk
- Privacy and logging safety
- Validation completeness
- Memory Bank update needs

## Workflow
1. Review changed files and the change summary.
2. Check whether the requested scope stayed narrow.
3. Check for sensitive logging, raw payload dumps, or debug leftovers.
4. If the task touched scheduling, payments, or record lifecycle, raise the scrutiny level.
5. State explicit risks and missing validation instead of hiding them.

## Output format
Return:
- pass / concerns,
- required fixes,
- validation still needed,
- residual risks if shipped now.
