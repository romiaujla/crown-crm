import { z } from "zod";

export const JwtClaimsSchema = z.object({
  sub: z.string(),
  role: z.enum(["super_admin", "tenant_admin", "tenant_user"]),
  tenant_id: z.string().nullable()
});

export type JwtClaims = z.infer<typeof JwtClaimsSchema>;
