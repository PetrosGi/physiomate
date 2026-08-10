---
paths:
  - "src/**/*.component.ts"
  - "src/**/*.component.html"
  - "src/**/*.component.scss"
  - "src/styles.scss"
  - "src/styles/**"
  - "src/theme/**"
  - "src/assets/**"
---

# UI and theme refactor rules

Apply this rule when working on Angular templates, SCSS, PrimeNG composition, layout shells, dialogs, forms, tables, cards, or shared visual primitives.

## UI refactor goals
- Build a real design system, not isolated screen polish.
- Standardize spacing, density, radii, surfaces, typography hierarchy, focus states, disabled states, empty states, and action hierarchy.
- Prefer reusable wrappers and shared patterns before local screen overrides.

## PrimeNG 17 guidance
- Work with the existing PrimeNG 17 setup.
- Do not introduce PrimeNG 20-era assumptions or migration changes.
- Prefer consistent composition and centralized styling over scattered component-specific hacks.

## UI behavior rule
- Keep visual refactors separate from business-rule changes when practical.
- If a UI element implies an unsupported action, flag it explicitly instead of silently preserving bad UX.
- Example: a patient delete button with no real delete capability should be treated as a product/UX inconsistency and verified before redesign.

## Validation focus
Check:
- layout consistency across main screens,
- keyboard flow,
- focus visibility,
- invalid/disabled/loading states,
- form density consistency,
- table/dialog usability,
- responsive behavior on the app's main working sizes.
