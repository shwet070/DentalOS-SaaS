# DentalOS Monorepo

DentalOS is organized as a Turborepo + pnpm monorepo so the platform can share types, database access, authentication, configuration, and UI primitives across multiple applications.

## Applications

- `apps/marketing` — public DentalOS website and marketing pages.
- `apps/super-admin` — DentalOS platform administration.
- `apps/clinic` — clinic staff, doctor, scheduling, patient, treatment, and billing portal.
- `apps/patient` — patient-facing portal.
- `apps/api` — shared backend/API service boundary.

## Shared packages

- `packages/db` — Prisma client and PostgreSQL schema.
- `packages/auth` — authentication-related shared types and Better Auth dependency boundary.
- `packages/config` — shared application configuration.
- `packages/types` — shared domain identifiers and role types.
- `packages/ui` — shared UI component boundary.

## Local setup

1. Install Node.js 22+ and pnpm 10.15.0.
2. Copy `.env.example` to the environment file required by the app you are running.
3. Add development credentials for PostgreSQL/Supabase and other services when those integrations are implemented.
4. Run `pnpm install`.
5. Run `pnpm dev` to start the configured applications.
6. Run `pnpm typecheck` before committing changes.

A `pnpm-lock.yaml` is intentionally not committed yet; it should be generated from the development environment with `pnpm install` once dependency versions are finalized.

## Architecture rule

Build DentalOS as vertical slices. A feature should move through the appropriate UI, API/service boundary, authorization, database model, validation, audit requirements, and tests rather than becoming an isolated frontend screen.

Tenant isolation is a security boundary: clinic/branch context must be resolved and authorized before tenant-owned data is read or changed.
