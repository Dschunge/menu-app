import type { Prisma } from '../../prisma/client';

import { z } from 'zod';

export const TourUpdateimagesInputSchema: z.ZodType<Prisma.TourUpdateimagesInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

export default TourUpdateimagesInputSchema;
