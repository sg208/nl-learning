# ai-rules

Shared agent configuration for NL Learning (and reusable across repos).

## Doc map (all rule files)

- **Setup & commands** → [README.md](../README.md)
- **System design & deployment** → [ARCHITECTURE.md](../ARCHITECTURE.md)
- **Stack, paths & conventions** → [PROJECT.md](../PROJECT.md)

## Layout

```
ai-rules/
├── CLAUDE.md
├── .cursor/rules/     # Cursor project rules
├── .github/copilot-instructions.md
└── templates/doc-pointer.mdc
```

## Use as a git submodule

```bash
# From consumer repo (once this repo is published, e.g. github.com/sg208/ai-rules)
git submodule add git@github.com:sg208/ai-rules.git ai-rules
git submodule update --init --recursive
```

Wire Cursor rules:

```bash
ln -sf ../ai-rules/.cursor/rules .cursor/rules
```

Document submodule init in the consumer README.
