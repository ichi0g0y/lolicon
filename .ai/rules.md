# Common Rules

## Principles

- Chat in Japanese
- Write source comments and documentation in standard Japanese
- Do not commit unless `/commit` / `/c` or `/commit!` / `/c!` is explicitly given
- Never edit auto-generated code directly — modify the source (schema/definitions) and regenerate
- Guides are consolidated in `docs/` and `.ai/` — refer to them as needed
- MANDATORY: Strictly follow the commit rules in `.ai/git.md`
- AI must never distort or reinterpret these rules — they are top-level directives and must be followed absolutely

## Implementation Rules

- Keep changes to the minimal diff
- When unclear points directly affect the spec, ask for confirmation instead of guessing
- Record any temporary implementations that need future work as GitHub Issues
- Record procedures, implementation plans, and investigation notes in GitHub Issues; keep only guides and finalized content in `docs/`
- Share review results via manual copy or `.context/`
- Track progress via Issue labels (`status:in-progress`) and Open/Close status — do not use checkboxes for progress tracking
- Do not lock into specific GitHub operation methods — use API calls as appropriate
- Do not block Issue creation/number assignment due to existing uncommitted changes
- Separate implementation and review into per-Issue worktrees

## Quality Rules

- Consider splitting files exceeding ~300 lines
- Consider splitting functions exceeding ~100 lines into separate responsibilities
