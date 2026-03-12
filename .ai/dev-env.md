# Development Environment Rules

## General Policy

- Avoid instructions that assume a specific OS or path
- Do not stop processes that the user has running
- Terminate processes started by AI for verification after the work is complete

## During Verification

- Report executed commands in a reproducible format
- Do not leave long-running processes behind
- Do not leave unnecessary build artifacts behind

## Local Settings

- Do not write environment-specific paths into documentation
- Do not store secrets in the repository

## Tool Execution Principles (for Codex)

- If the first tool attempted is not found, suggest installation
- If `python` is not found, try `python3`; if neither exists, suggest installation

## GitHub Operations

- Do not lock into specific GitHub operation methods
- Use GitHub REST API / GitHub GraphQL API or any method that fits the environment
- Do not depend on specific wrapper script internals as operational rules
- In environments requiring auth switching, prefer API token usage over CLI login state
- Prioritize equivalent results for Issues/PRs/comments/labels regardless of the method used
