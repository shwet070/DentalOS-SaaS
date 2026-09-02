# DentalOS Development Roadmap

## Development order

1. Architecture and repository foundation
2. Database architecture
3. Authentication and authorization
4. Multi-tenancy and branch isolation
5. Super Admin
6. Clinic Administration
7. Patient Management
8. Appointment and Scheduling
9. Dental Chart and Treatment Records
10. Treatment Plans
11. Prescription System
12. Documents and Supabase Storage
13. Patient Portal
14. Notifications
15. Email Infrastructure
16. Background Jobs
17. Audit and Compliance
18. Global Search
19. Configurable Dashboards
20. Billing and Monetization
21. Automated Testing
22. Production Security
23. Deployment
24. Beta Launch
25. Production Launch
26. Phase 2 features

## Core product principles

- Multi-tenant isolation is mandatory.
- Every clinic belongs to an organization/tenant.
- Branch-level access is enforced through RBAC and server-side authorization.
- Clinical record corrections preserve the original record and create an audit trail.
- Patient documents are private and access-controlled.
- Appointment conflicts must be prevented server-side.
- Dashboards support configurable layouts and separate saved layouts by device.
- Patient IDs use 8-digit random identifiers.
- Appointment IDs follow `DDMMYY-BR##-###`.
- Authentication MVP uses email and password, including patients. SMS/OTP is deferred to Phase 2.
- Clinic-specific subdomains are the planned tenant routing model.

## Current infrastructure decisions

| Area | Decision |
| --- | --- |
| Source control | GitHub |
| Repository | `shwet070/DentalOS-SaaS` |
| VPS | Hostinger KVM 2 |
| Database | Supabase PostgreSQL Free for development |
| File storage | Supabase Storage |
| ORM | Prisma |
| Authentication | Better Auth |
| Email | Resend Free |
| Background jobs | Inngest Hobby/Free |
| Payments | Razorpay |
| Error monitoring | Sentry |
| Frontend hosting | Vercel (planned) |
| DNS | Cloudflare (planned) |
| CI/CD | GitHub Actions (planned) |
| Product analytics | PostHog (planned) |

## MVP authentication decision

The initial implementation will use email + password for all user types, including patients. Paid SMS/OTP is intentionally postponed until Phase 2.

## Vertical-slice development

Features should be implemented end-to-end rather than building disconnected screens. A typical slice should include database schema, server-side authorization, API/service logic, UI, validation, audit requirements, tests, and error handling.
