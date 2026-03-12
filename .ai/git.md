# Git Commit Rules

## MANDATORY: Commit Restrictions

- Do not commit unless `/commit` / `/c` or `/commit!` / `/c!` is explicitly given
- Do not commit on ambiguous instructions such as "OK", "go ahead", "create a PR", "push it"
- Do not execute `git commit --amend` without explicit user instruction
- Do not add Co-authored-by footer to commits
- The condition to start a commit is that the user's latest instruction explicitly contains a `/commit`-series command
- Responses to confirmations during `/commit` / `/commit!` execution are treated as continuation instructions within the same procedure

## Commit Message Format

- Format: `emoji scope: description`
- Write the description concisely in Japanese
- Choose the scope to match the change target (e.g., `docs` / `app` / `root`)
- Emoji list:
  - `🐛 :bug:` Bug fix
  - `🎈 :balloon:` String change or minor fix
  - `👍 :+1:` Feature improvement
  - `✨ :sparkles:` Partial feature addition
  - `🎉 :tada:` Major feature addition worth celebrating
  - `♻️ :recycle:` Refactoring
  - `🚿 :shower:` Removal of unused features
  - `💚 :green_heart:` Test or CI fix/improvement
  - `👕 :shirt:` Lint error fix or code style fix
  - `🚀 :rocket:` Performance improvement
  - `🆙 :up:` Dependency update
  - `🔒 :lock:` Restricting scope of new features
  - `👮 :cop:` Security-related improvement
  - `🔧 :wrench:` Configuration change
  - `📝 :memo:` Documentation cleanup
  - `🚧 :construction:` Work in progress

### Examples

- `✨ docs: 初期ガイドを追加`
- `🐛 app: APIエラーハンドリングを修正`
- `♻️ root: テンプレート構成を簡素化`

## Commit Operations (`/commit` / `/commit!`)

### Triggers

- `/commit` / `/c`
- `/commit!` / `/c!`

### Common Rules

- Both commands stage with `git add -A` before processing
- Do not ask user permission before staging
- After staging, show `git diff --cached --name-only` to the user to confirm target files
- If staged changes include unintended modifications, report to the user before committing

### Staging

1. Run `git add -A`
2. Show `git diff --cached --name-only` to confirm targets

### `/commit` (with confirmation)

1. Present 3 commit message candidates based on the changes
2. Commit with the candidate chosen by the user

### `/commit!` (without confirmation)

1. Generate 3 commit message candidates based on the changes
2. If staged changes include unintended modifications, report to the user before committing and confirm whether to continue within the same procedure
3. If continuation is confirmed, commit immediately using the first candidate without user confirmation

## PR Operations

- Default to 1 Issue = 1 PR
- Keep PR changes small and apply incrementally
- PR base branch is `main`
- Reference the target Issue in the PR body
- Use `Closes` with the working Issue number (use sub-Issue number for parent + sub-Issue structures)
- Use `Refs` for parent Issues and related Issues; explicitly cross-reference when shared library changes are involved
