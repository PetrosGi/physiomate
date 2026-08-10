---
paths:
  - "package.json"
  - "package-lock.json"
  - "pnpm-lock.yaml"
  - "yarn.lock"
  - "angular.json"
  - "tsconfig*.json"
  - "eslint*.{js,cjs,mjs,json}"
  - ".browserslistrc"
  - ".editorconfig"
  - ".github/**"
  - "Dockerfile*"
  - "docker-compose*.yml"
  - "proxy.conf*"
---

# Build and tooling rules

Apply this rule when touching package scripts, Angular workspace config, TypeScript config, Docker/dev-server setup, or CI-facing commands.

## Version discipline
- Keep Angular 18 and PrimeNG 17 pinned unless the user explicitly asks otherwise.
- Do not turn routine refactors into stealth migrations.
- Verify script and config changes against the existing toolchain instead of assuming newer defaults.

## Change discipline
- Keep tooling edits minimal and reversible.
- Separate build/tooling changes from feature work unless the change is directly required.
- Note exactly which commands should be run after the change.

## Validation focus
Prefer the smallest sufficient set of checks, typically:
- install consistency if dependencies changed,
- build,
- test,
- lint if configured,
- targeted smoke path for the affected feature.
