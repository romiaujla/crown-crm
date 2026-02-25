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

## Planning-First Workflow
Major features require Spec Kit artifacts before implementation:
1. `/constitution`
2. `/specify`
3. `/plan`
4. `/tasks`
