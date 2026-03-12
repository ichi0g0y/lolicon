# Workflow

## AI Collaboration Flow

- Prioritize the purpose of the user's instruction above all else
- Roles of Codex / Claude are not fixed
- Determine per turn whether to act as reviewer or respondent to review feedback
- Consolidate changes, progress, procedures, plans, and review perspectives in GitHub Issues
- Do not lock into specific GitHub operation methods (REST API / GraphQL API — choose what fits the environment)
- Manage state via GitHub Issue labels + Close status
- Default to 1 Issue per worktree; only handle closely related work in the same worktree
- Keep PRs small and merge incrementally
- Proceed with Issue definition creation and Issue number assignment even when uncommitted changes exist

## Issue State and Labels

- `Open`: Not started / waiting (no label)
- `In Progress`: Add `status:in-progress` label
- `Close`: Complete. Close the Issue after the PR is merged
- Priority is managed with `priority:P0` / `priority:P1` / `priority:P2` / `priority:P3`

Priority guidelines:

1. `P0`: Service outage, critical bug, highest priority
2. `P1`: Important feature implementation/fix requiring early action
3. `P2`: Normal priority
4. `P3`: Low priority, can be deferred

## Issue Design Principles

- Size Issues so that 1 Issue = 1 PR
- Do not use checkboxes in Issue bodies — track progress via Issue Open/Close status
- Split large features into **parent Issue + sub-Issues**
  - **Parent Issue:** Only describes feature overview, requirements, and risk mitigation. Does not include detailed tasks or progress tracking
  - **Sub-Issues:** Briefly describe implementation details and deliverables. No checkboxes
  - Sub-Issue titles must be self-explanatory without the parent's context
  - Create sub-Issues using the GraphQL API `addSubIssue` mutation
- When no `/pick`-equivalent instruction, no explicit Issue number, and `current_issue` is unset, present Open Issue candidates in priority order in plan mode and confirm the chosen Issue with the user
- If no suitable existing Issue exists, report this to the user and follow their subsequent instructions

## Issue Scope Management

- `current_issue` is managed in both the conversation context and `.context/current_issue`
- At session start, if `.context/current_issue` exists, restore it as the target Issue
- If conversation context and `.context/current_issue` disagree, prioritize the user's most recent explicit instruction; if none, treat `.context/current_issue` as authoritative
- Planning discussions and brainstorming may proceed without `current_issue` being set
- When no Issue number is specified and `current_issue` is unset, fetch multiple Open Issues in priority order (`P0 -> P1 -> P2 -> P3 -> no priority`) in plan mode as candidates
- If there is exactly 1 candidate, set it as `current_issue`; if multiple, let the user choose, then set the chosen one as `current_issue`
- If there are no suitable candidates, report 0 candidates to the user and leave `current_issue` unset
- To continue an existing Issue, use `/pick` / `/p` or explicitly specify the Issue number
- When `current_issue` is determined, write the Issue number as a single line to `.context/current_issue`
- Before overwriting `.context/current_issue`, confirm with the user unless the Issue number is explicitly specified in their latest instruction
- When changes include shared library modifications, cross-reference affected Issues with `Refs #...`
- When the target PR is merged and the Issue is confirmed complete, delete `.context/current_issue`

## Basic Flow

### 0. Intake Gate

1. Confirm the purpose, completion criteria, and expected deliverables of the user's instruction
2. If no `/pick`-equivalent instruction, no explicit Issue number, and `current_issue` is unset, present Open Issue candidates and confirm scope in plan mode first (except for planning discussions and brainstorming)
3. Decide whether to act as reviewer or respondent for the current turn, and state the approach explicitly

### 1. Planning

1. Break down the user's instruction into units where 1 Issue = 1 PR
2. Organize purpose, implementation details, and deliverables as Issue definitions
3. For large features, split into parent Issue + sub-Issues — parent contains overview only, sub-Issues contain implementation details
4. After scope agreement, the same agent continues from Issue selection through implementation

### 2. Scope Lock (optional)

1. Determine the target Issue number and sync with the conversation context's `current_issue`
2. When `current_issue` is determined, save the Issue number as a single line to `.context/current_issue`
3. If unset, present Open Issue candidates; if 0 candidates, report and confirm next action with the user

### 3. Implementation

1. If the target Issue has not been created by the time file changes begin, create it at this stage and assign a number
2. Create a workspace (worktree) for the target Issue in Conductor, using `main` as the base branch
3. If tracked as an Issue, add `status:in-progress` label at the start
4. If the change scope exceeds initial estimates, confirm the split strategy or scope change first
5. Report implementation/test results, decision rationale, and remaining items in Japanese; record in the Issue as needed

### 4. Review

1. Specify the target Issue number when requesting a review
2. Include file path, line number, and rationale in review comments
3. Judge each finding as `Accepted / Rejected / Needs More Information`
4. When review comments need Issue recording, document the finding summary, decision, and action plan in the Issue
5. Record user feedback and additional decisions in the Issue when history is needed

### 5. PR and Completion

1. Reference the target Issue in the PR body
2. Use `Closes` with the working Issue number (use sub-Issue number for parent + sub-Issue structures)
3. Use `Refs` for parent Issues and related Issues; explicitly cross-reference when shared library changes are involved
4. If the Issue is not auto-closed after PR merge, manually close it referencing the merged PR
5. After PR merge, check via `subIssuesSummary` whether all sub-Issues are closed; if all complete, close the parent Issue
6. Delete `.context/current_issue` when the target Issue is confirmed complete
