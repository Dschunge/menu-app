import type { Prisma } from '../../prisma/client';

import { z } from 'zod';

export const TourCreateimagesInputSchema: z.ZodType<Prisma.TourCreateimagesInput> = z.object({
  set: z.string().array()
}).strict();

export default TourCreateimagesInputSchema;
