# Spec Kit Workflow (Required for Major Features)

Canonical governance policy lives in:
- `docs/process/engineering-constitution.md`

For major features, complete these artifacts before implementation:
1. `/constitution`
2. `/specify`
3. `/plan`
4. `/tasks`

## Enforcement
- Jira issue must link completed planning artifacts before implementation starts.
- PR description must reference corresponding spec/plan/tasks artifacts.

## Jira Key Convention (Required)
- Branch names must use:
  - `chore/CROWN-<id>` for Task
  - `feat/CROWN-<id>` for Story
  - `fix/CROWN-<id>` for Bug
  - `hotfix/CROWN-<id>` for Hotfix
- PR titles must include a Jira key, for example `CROWN-12: Add auth endpoints`.
- Commit messages should include a Jira key.
- Commit messages are rewritten by hook format: `<type>: CROWN-<id> - <message>`.

### Type mapping from branch context
- `chore` branch -> `chore` commit prefix
- `feat` branch -> `feat` commit prefix
- `fix` branch -> `fix` commit prefix
- `hotfix` branch -> `hotfix` commit prefix

## Ownership
- Policy definition lives in architecture/planning scope (`CROWN-2`).
- Automated enforcement lives in CI quality gates (`CROWN-9`).
