# API Boundaries

## Namespaces
- `/api/v1/auth/*`: login, refresh, logout
- `/api/v1/platform/*`: tenant provisioning and platform controls
- `/api/v1/tenant/*`: tenant-scoped CRM operations

## Contract rules
- Platform endpoints require `super_admin`.
- Tenant endpoints require tenant role and tenant context.
- All payloads validated with Zod.
