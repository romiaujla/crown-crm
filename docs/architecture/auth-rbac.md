# Auth and RBAC

## Token model
- Access + refresh JWT.
- Claims:
  - `sub`
  - `role` (`super_admin`, `tenant_admin`, `tenant_user`)
  - `tenant_id` (nullable for super-admin global ops)

## RBAC matrix
- `super_admin`: tenant lifecycle, platform settings, global audit visibility.
- `tenant_admin`: manage users and CRM data in assigned tenant.
- `tenant_user`: standard CRM operations in assigned tenant.
