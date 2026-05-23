# NL Learning — Claude Code rules

## Doc map

- **Setup & commands** → [README.md](../README.md)
- **System design & deployment** → [ARCHITECTURE.md](../ARCHITECTURE.md)
- **Stack, paths & conventions** → [PROJECT.md](../PROJECT.md)

## Workflow

1. Read PROJECT.md for paths and conventions relevant to the task.
2. Read ARCHITECTURE.md when changing KNM flow, PWA, i18n routing, or deploy.
3. Read README.md for scripts, env vars, or onboarding copy.
4. Follow `.cursor/rules/` in this directory for a11y, security, Astro, and base standards.

## Submodule note

This directory is structured to be shared as a git submodule (`ai-rules`) across repos. After publishing to a remote, pin with `git submodule update --init --recursive` in consumer repos.
