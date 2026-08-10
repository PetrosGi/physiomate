---
name: repo-mapping
description: Map the repository and update durable project knowledge. Use when initializing memory-bank files, indexing routes/features/services, identifying style entry points, or documenting sensitive-data boundaries.
---

# Repo mapping

Use this skill to build a reusable understanding of the codebase without overloading the conversation.

## Goals
- Identify app entry points and main routes.
- Map patients, personnel, rendezvous, payments, expenses, and shared UI areas.
- Identify styling/theme entry points and repeated layout patterns.
- Identify sensitive-data boundaries and high-risk files.
- Save durable findings into the Memory Bank.

## Workflow
1. Start with `package.json`, Angular workspace config, bootstrap files, and route/shell entry points.
2. Find the major feature folders and shared UI primitives.
3. Trace where sensitive records enter, transform, render, and persist.
4. Note important commands: install, dev, build, lint, test, and any environment-specific scripts.
5. Update:
   - `memory-bank/repoMap.md`
   - `memory-bank/systemPatterns.md`
   - `memory-bank/techContext.md`
6. Keep the output concise and sanitized.

## Output style
Return a compact summary with:
- main entry points,
- feature map,
- high-risk areas,
- likely first implementation target.
