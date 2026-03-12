# Review

## Writing Rules

- Always include file path, line number, and rationale in findings
- Clarify "why it's a problem" before "how to fix it"
- Report review results in Japanese
- Do not auto-post review comments to Issues
- Share findings via manual copy or `.context/`
- When there are no issues, optionally record the review scope and result summary briefly in the Issue
- If the user wants to preserve history, record in the Issue regardless of whether findings exist
- Refer to `.ai/workflow.md` for review coordination procedures

## Review Perspectives (priority order)

1. Correctness
2. Boundary conditions
3. Error handling
4. Concurrency
5. State management
6. Maintainability
7. Design consistency
8. Test coverage

## Output Template

```markdown
## Review Feedback

- issue: #<issue-number>
- summary: Findings that require fixes
- findings:
  - id: F-01
    severity: High
    location: path/to/file.ext:123
    issue: Description of the problem
    reason: Technical reason why it's a problem
    impact: Expected impact
    decision: Accepted / Rejected / Needs More Information
```
