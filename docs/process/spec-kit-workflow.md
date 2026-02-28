# Spec Kit Workflow (Required for Major Features)

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
