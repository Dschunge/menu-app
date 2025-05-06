import type { Prisma } from '../../prisma/client';

import { z } from 'zod';

export const SpaPriceCategoryCreateManyInputSchema: z.ZodType<Prisma.SpaPriceCategoryCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  sku: z.number().int(),
  price: z.number().int(),
  description: z.string().optional(),
  description_esp: z.string().optional(),
  duration: z.number().int(),
  spaId: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default SpaPriceCategoryCreateManyInputSchema;
