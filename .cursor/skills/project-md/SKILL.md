---
name: project-md
description: Read PROJECT.md before repo work.
---

# Project MD First

Use this skill to keep work focused and token-efficient by grounding decisions in `PROJECT.md` before scanning many files.

## Default Workflow

1. Read `PROJECT.md` first.
2. Extract only the sections relevant to the task (architecture, conventions, scripts, constraints, active priorities).
3. Build an initial approach from that context.
4. Read codebase files only as needed to confirm implementation details.
5. Prefer targeted file reads/search over broad repository sweeps.

## Search Order

Use this order unless the user explicitly asks otherwise:

1. `PROJECT.md`
2. Files directly named by the user
3. Closest feature/module files
4. Wider codebase exploration as fallback

## Model Guidance

- Prefer a faster model for routine `PROJECT.md` lookup and targeted file reads.
- Use a more capable model only for deep cross-module reasoning, ambiguous architecture, or complex debugging.
- If the user explicitly requests a specific model, follow the user request.

## Guardrails

- Do not skip `PROJECT.md` when it exists.
- If `PROJECT.md` is missing or outdated for the task, state that briefly and continue with focused code exploration.
- Keep terminology and conventions aligned with `PROJECT.md` unless the user overrides them.
