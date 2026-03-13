# Ecommerce Platform Monorepo

## Overview

Nx + pnpm monorepo for a minimal e-commerce platform with:

- `apps/store`: Next.js storefront
- `apps/admin`: Next.js admin CMS
- `apps/api`: NestJS API
- `packages/shared-types`: shared API/frontend types
- `packages/validators`: zod schemas and shared validation
- `packages/ui`: shared shadcn-style UI primitives
- `packages/config`: shared TypeScript, Tailwind, ESLint, Prettier config

## Architecture

- Frontends talk only to the API over HTTP.
- Prisma targets PostgreSQL and manages the core commerce schema.
- Redis powers BullMQ background jobs.
- Local uploads are stored in `/uploads` behind a storage adapter so S3 can be added later.
- Swagger is available at `/docs` and health checks at `/health`.
- Pino provides structured request logging and Sentry is initialized when `SENTRY_DSN` is set.

## Setup

1. Install dependencies:

```bash
pnpm install
```

2. Start local services:

```bash
docker compose up -d
```

3. Copy env files:

```bash
cp .env.example .env
cp apps/api/.env.example apps/api/.env
cp apps/store/.env.local.example apps/store/.env.local
cp apps/admin/.env.local.example apps/admin/.env.local
```

4. Generate Prisma client, migrate, and seed:

```bash
pnpm prisma:generate
pnpm prisma:migrate
pnpm prisma:seed
```

## Development Commands

- `pnpm nx serve store`
- `pnpm nx serve admin`
- `pnpm nx serve api`
- `pnpm dev`
- `pnpm storybook`
- `pnpm storybook:build`
- `pnpm test`
- `pnpm test:e2e`

## Storybook

- Storybook is configured for `packages/ui`.
- Start it locally with `pnpm storybook`.
- Build the static bundle with `pnpm storybook:build`.
- Story files live alongside UI components in `packages/ui/src/components`.
- Storybook config lives in `packages/ui/.storybook`.

## Prisma Commands

- `pnpm prisma:generate`
- `pnpm prisma:migrate`
- `pnpm prisma:seed`

## Notes

- Storefront: `http://localhost:3000`
- Admin: `http://localhost:3002`
- API: `http://localhost:3001`
- Swagger docs: `http://localhost:3001/docs`
- Health: `http://localhost:3001/health`
- Seed admin credentials: `admin@example.com` / `password123`


## Codex hints
- Run: `docker compose up -d`
- Copy env examples and run `pnpm prisma:migrate && pnpm prisma:seed`
- Start `pnpm nx serve api`, `pnpm nx serve admin`, `pnpm nx serve store` in separate terminals
