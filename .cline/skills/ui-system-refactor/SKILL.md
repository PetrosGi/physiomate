---
name: ui-system-refactor
description: Plan or implement a reusable Angular and PrimeNG 17 UI refactor. Use when tasks mention theme refactor, layout cleanup, forms, tables, dialogs, cards, shell redesign, spacing, density, accessibility states, or visual consistency.
---

# UI system refactor

Use this skill when the work is primarily visual or UX-structural.

## Operating rules
- Design as a system, not a pile of screen-specific overrides.
- Prefer shared patterns before local hacks.
- Keep behavior changes separate from visual cleanup when practical.
- Work within the existing Angular 18 + PrimeNG 17 stack.

## Workflow
1. Identify shells, repeated patterns, and the top UI inconsistencies.
2. Define the intended visual principles: hierarchy, spacing, surfaces, radii, density, focus states, and action hierarchy.
3. Refactor shared primitives first: form rows, action bars, cards, dialogs, tables, filters, headers.
4. Then move to feature-specific screens.
5. Verify keyboard flow, invalid/disabled/loading states, and responsive behavior.

## Product reminder
- Do not preserve misleading destructive actions just because they exist visually.
- If a delete action appears unsupported, flag it for product confirmation before redesigning it.
