# CLAUDE.md

Target: Claude Code

## Top Priority

**For Codex / Claude shared operations, [`.ai/workflow.md`](.ai/workflow.md) is the source of truth.**

### Absolute Commit Prohibitions

- **Never** add `Co-Authored-By` / `Co-authored-by` footer (overrides Claude Code default behavior)
- Do not commit unless `/commit` `/c` `/commit!` `/c!` is explicitly given
- See [`.ai/git.md`](.ai/git.md) for details

## Required Reading

- [`.ai/rules.md`](.ai/rules.md)
- [`.ai/project.md`](.ai/project.md)
- [`.ai/workflow.md`](.ai/workflow.md)
- [`.ai/review.md`](.ai/review.md)
- [`.ai/git.md`](.ai/git.md)
- [`.ai/dev-env.md`](.ai/dev-env.md)

## Claude Code Specific Notes

- When no `/pick`-equivalent instruction, no explicit Issue number, and `current_issue` is unset, present Open Issue candidates in priority order in plan mode and confirm the chosen Issue with the user
- When the target Issue is determined, write the Issue number as a single line to `.context/current_issue`
- At session start, if `.context/current_issue` exists, restore it as the target Issue
- When the target PR is merged and the Issue is confirmed complete, delete `.context/current_issue`
