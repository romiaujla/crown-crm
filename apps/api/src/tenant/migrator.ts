export type TenantMigration = {
  version: string;
  description: string;
  sqlPath: string;
};

export const tenantMigrationStrategy = {
  prismaScope: "public",
  tenantScope: "tenant_<slug>",
  execution: "versioned-sql"
} as const;
