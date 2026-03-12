# Conductor Prompt Templates

A collection of human-facing templates for requesting work from Codex/Claude via Conductor.

## Review Request

```text
- For review operations, refer to `.ai/review.md` and `.ai/workflow.md` as the source of truth. If there are overlapping instructions, those files take precedence.
- Specify the target Issue number (e.g., `#9`). If omitting, set `.context/current_issue` first.
- All review result reports must be written in Japanese.
- Mark each finding as `Accepted / Rejected / Needs More Information`.
- Include file path, line number, and rationale for each finding.
- If fixes were made, include the tests performed and their results in the final report.
- Do not auto-post review findings as Issue comments — output them in a format that can be manually copied if needed.
```

## PR Creation Request

```text
- For PR creation and commit operations, refer to `.ai/git.md` and `.ai/workflow.md` as the source of truth. If there are overlapping rules, those files take precedence.
- All reports, proposals, and PR body text must be written in Japanese.
- Set the PR base branch to `main`.
- Write the PR body in Japanese with the following headings:
  - 概要 (Overview)
  - 変更内容 (Changes)
  - テスト手順 (Test Procedure)
  - 影響範囲 (Impact Scope)
  - チェックリスト (Checklist)
- Use `Closes` with the working Issue number (use sub-Issue number for parent + sub-Issue structures).
- Use `Refs` for parent Issues and related Issues.
- After PR merge, if all sub-Issues of a parent Issue are closed, close the parent Issue as well.
- Include the verification commands executed and their results in the PR body.
- If any verifications were not performed, list them as "Unperformed Items" with reasons.
- Always include the created/updated PR URL (`pr_url`) in the final report.
```
