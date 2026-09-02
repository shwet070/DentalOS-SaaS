# DentalOS Architecture

## Product

DentalOS is a multi-tenant SaaS platform for dental clinics. The platform supports organizations, branches, clinical staff, doctors, patients, appointments, treatment records, treatment plans, prescriptions, documents, notifications, audit logs, dashboards, search, billing, and operational administration.

## Repository architecture

The repository is a pnpm + Turborepo monorepo.

### Applications

- `apps/marketing` — public marketing website
- `apps/super-admin` — platform administration
- `apps/clinic` — clinic/staff/doctor application
- `apps/patient` — patient portal
- `apps/api` — shared server/API service where required

### Shared packages

- `packages/ui` — shared UI primitives and design system
- `packages/db` — Prisma schema/client/database utilities
- `packages/auth` — authentication and authorization primitives
- `packages/config` — shared configuration
- `packages/types` — shared domain types

## Data architecture

Primary relational database: PostgreSQL hosted by Supabase during development.

Prisma is the ORM. Tenant context must be established before accessing tenant-scoped data. Authorization must be enforced on the server and must never depend only on UI visibility.

## Tenant model

The planned routing model uses clinic-specific subdomains. Tenant/organization and branch context should be resolved from the authenticated session and validated against the requested hostname/resource.

## Authentication

Better Auth is the planned authentication framework.

MVP login uses email + password for patients and staff. SMS/OTP is deferred to Phase 2.

## Storage

Supabase Storage is used for documents and issued clinical PDFs. Sensitive documents must use private buckets and authorization-controlled access. Public document URLs should not be used for patient records.

## Background processing

Inngest is planned for asynchronous and scheduled jobs such as notifications, email workflows, document processing, reminders, and other non-request-critical work.

## Email

Resend is planned for transactional email delivery.

## Payments

Razorpay is planned for SaaS billing and subscription/payment flows.

## Observability

Sentry is planned for application error monitoring. Product analytics are planned through PostHog.

## Security requirements

- Tenant isolation
- Branch isolation
- RBAC
- Server-side authorization
- Input validation
- Audit logging
- Private document storage
- Secure secrets management
- Rate limiting for sensitive endpoints
- No secrets committed to Git
- Production backups and recovery procedures before handling production clinical data

## Clinical data integrity

Treatment records are not hard-deleted as a correction mechanism. Corrections preserve the original record and create an auditable history.

Prescriptions are versioned and retain their issued history/PDF artifacts and relevant audit information.

Appointments require server-side conflict prevention and support approval, rejection, rescheduling, cancellation, no-show, and completion states.
