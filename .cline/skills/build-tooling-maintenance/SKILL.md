---
name: build-tooling-maintenance
description: Maintain Angular 18 and PrimeNG 17 build, tooling, and workspace configuration safely. Use when tasks mention package.json, angular.json, tsconfig, scripts, proxy config, Docker, CI, dev-server, or local environment setup.
---

# Build and tooling maintenance

Use this skill for package, script, and workspace configuration work.

## Workflow
1. Confirm the current toolchain from the repo, not from memory.
2. Keep version changes minimal and explicit.
3. Avoid stealth migrations.
4. Note exactly which commands need to be rerun after the change.
5. Validate the smallest relevant command set: build, test, lint, or targeted serve flow.

## Guardrails
- Angular 18 / PrimeNG 17 are pinned unless the user explicitly says otherwise.
- Separate tooling cleanup from unrelated feature work.
