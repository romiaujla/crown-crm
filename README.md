# crown-crm

Multi-tenant CRM monorepo for Crown CRM MVP.

## Stack
- Monorepo: pnpm + Turborepo
- Backend: Node.js, TypeScript, Express, Zod, Prisma, PostgreSQL
- Frontend: Next.js App Router, TypeScript, shadcn/ui-compatible component setup, Playwright
- Testing: Vitest + Supertest + Testcontainers (backend), Playwright (frontend)

## Workspace Layout
- `apps/api` - Express API and global Prisma schema
- `apps/web` - Next.js application
- `packages/config` - shared configuration presets
- `packages/types` - shared types and Zod schemas
- `packages/ui` - shared UI primitives
- `infra/docker` - local infrastructure (PostgreSQL)
- `docs` - architecture, ADRs, and specs

## Commands
- `pnpm install`
- `pnpm dev`
- `pnpm lint`
- `pnpm typecheck`
- `pnpm test`
- `pnpm build`
<<<<<<< HEAD
- `pnpm release`

## Commit and Release Convention
- Branch naming by Jira issue type:
  - Task: `chore/CROWN-123-short-name`
  - Story: `feat/CROWN-123-short-name`
  - Bug: `fix/CROWN-123-short-name`
  - Hotfix: `hotfix/CROWN-123-short-name`
- Commit messages are normalized by `commit-msg` hook to:
  - `<type>: CROWN-<id> - <message>`
- Type mapping:
  - `chore` branch -> `chore` commit
  - `feat` branch -> `feat` commit
  - `fix` branch -> `fix` commit
  - `hotfix` branch -> `hotfix` commit
- Trunk (`main`) releases are generated with semantic-release and Git tags.
=======
>>>>>>> @{-1}

## Planning-First Workflow
Major features require Spec Kit artifacts before implementation:
1. `/constitution`
2. `/specify`
3. `/plan`
4. `/tasks`
