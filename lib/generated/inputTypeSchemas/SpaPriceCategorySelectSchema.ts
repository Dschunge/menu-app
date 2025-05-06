import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { SpaArgsSchema } from "../outputTypeSchemas/SpaArgsSchema"

export const SpaPriceCategorySelectSchema: z.ZodType<Prisma.SpaPriceCategorySelect> = z.object({
  id: z.boolean().optional(),
  sku: z.boolean().optional(),
  price: z.boolean().optional(),
  description: z.boolean().optional(),
  description_esp: z.boolean().optional(),
  duration: z.boolean().optional(),
  spaId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  spa: z.union([z.boolean(),z.lazy(() => SpaArgsSchema)]).optional(),
}).strict()

export default SpaPriceCategorySelectSchema;
