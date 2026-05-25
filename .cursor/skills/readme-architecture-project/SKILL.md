---
name: readme-architecture-project
description: Maintain README, ARCHITECTURE, PROJECT split.
---

# README · ARCHITECTURE · PROJECT

Keep the three root docs sharply separated. Repo-local tool guidance lives in `CLAUDE.md`, `.cursor/rules/`, and `.github/copilot-instructions.md`; those files should point agents at the right root doc instead of duplicating it.

## Document roles

| File | Audience | Purpose | Update when |
| ---- | -------- | ------- | ----------- |
| **README.md** | Humans + every tool | Getting started, quick reference, clone-to-run | Setup, scripts, env vars, branches, license, one-paragraph pitch |
| **ARCHITECTURE.md** | Implementers + reviewers | System design, data flow, deployment pipeline | Routes/modules, integrations, build/deploy path, diagrams, env in prod |
| **PROJECT.md** | Agents + contributors | Tech stack, repo structure, conventions | Stack, key paths, coding norms, active priorities, feature map |

**Single source of truth:** each fact lives in **one** file. Other files link; they do not copy paragraphs.

### README.md — quick reference

- One-line pitch + who it's for
- Prerequisites and install (`npm install`, etc.)
- Dev / build / preview / test commands (copy-paste blocks)
- Required env vars and deploy secrets (table OK)
- Branch strategy in one short section
- Minimal layout (top-level folders only — not every module)
- License / disclaimer one-liner
- **Do not** put deep architecture, convention essays, or file-by-file maps here

### ARCHITECTURE.md — how the system works

- High-level diagram (mermaid or ASCII) when helpful
- Request/page lifecycle, major subsystems, external services
- Data flow: sources → transforms → storage → UI/API
- Auth, caching, PWA/service worker, i18n routing if applicable
- Build output and **deployment pipeline** (CI, CDN, secrets by name not value)
- Cross-cutting concerns (error handling, observability) at design level
- **Do not** duplicate command cheatsheets or lint/style rules

### PROJECT.md — stack and conventions

- Stack table (framework, styling, data, deploy)
- Repo structure with **meaningful** paths (not a raw tree dump)
- Conventions agents must follow (patterns, naming, file size, testing)
- Include repo-local agent paths when they matter (`.cursor/skills/`, `.cursor/rules/`)
- Current priorities or "how we work" notes
- Pointers: "See README.md for setup; ARCHITECTURE.md for system design"
- **Do not** paste full CI YAML or long deployment runbooks — link to workflow files

## Repo-local tool guidance

- `CLAUDE.md` keeps Claude startup guidance short and points back to root docs.
- `.cursor/rules/*.mdc` holds Cursor rule files for base, framework, accessibility, and security behavior.
- `.github/copilot-instructions.md` is a condensed mirror of `PROJECT.md` plus doc pointers for Copilot.
- Tool guidance should link to the root docs instead of duplicating setup steps, stack tables, or long design notes.

### Tool rule cross-reference (required)

Every tool-specific rules file should open with a **Doc map** section:

```markdown
## Doc map

- **Setup & commands** → [README.md](../../README.md)
- **System design & deployment** → [ARCHITECTURE.md](../../ARCHITECTURE.md)
- **Stack, paths & conventions** → [PROJECT.md](../../PROJECT.md)
```

Adjust relative paths for the rule file location. Rules files hold **behavior** (lint, a11y, security, framework patterns). They do **not** restate stack tables or install steps — they link.

Copilot instructions: mirror `PROJECT.md` + pointer lines; stay within Copilot's size budget.

## Agent read order

When starting work, read in this order unless the user names a file:

1. **PROJECT.md** — stack, paths, conventions for the task
2. **ARCHITECTURE.md** — if the task touches flows, deploy, integrations, or cross-module design
3. **README.md** — if the task is setup, env, scripts, or onboarding copy
4. Matching skill or rule files as needed
5. Code and config files as needed

If a doc is missing, note it once and proceed; offer to create it using the boundaries above.

## Workflows

### Audit (drift check)

For each fact (stack version, script name, deploy target, convention):

- Exactly one primary home among the three files
- Tool rules link, not copy
- README commands match `package.json` scripts
- ARCHITECTURE deploy section matches `.github/workflows/` (names/steps, not secrets)
- PROJECT paths match current tree
- Repo-local tool guidance points back to the right root doc

Report gaps as: missing doc, wrong doc, or duplicate.

### Update after a change

| Change type | Update |
| ----------- | ------ |
| New script / env var | README.md |
| New route, service, data path, CI stage | ARCHITECTURE.md |
| New convention, folder, dependency, priority | PROJECT.md |
| New lint/a11y/security/framework rule | `.cursor/rules/` |
| Copilot-only summary | `.github/copilot-instructions.md` |
| Claude startup guidance | `CLAUDE.md` |

When the commit workflow runs, apply the same routing: README for setup, ARCHITECTURE for design/deploy, PROJECT for stack/structure/conventions.

## Writing quality

- Prefer tables and bullet lists over prose walls in PROJECT.md and README.md.
- ARCHITECTURE.md may use diagrams; keep them maintained when flows change.
- Use relative links between the three files.
- Keep each file scannable: headings, short sections, no duplicate H1 topics across files.
