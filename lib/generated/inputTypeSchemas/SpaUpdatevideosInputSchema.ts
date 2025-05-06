import type { Prisma } from '../../prisma/client';

import { z } from 'zod';

export const SpaUpdatevideosInputSchema: z.ZodType<Prisma.SpaUpdatevideosInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

export default SpaUpdatevideosInputSchema;
