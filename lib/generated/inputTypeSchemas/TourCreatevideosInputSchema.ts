import type { Prisma } from '../../prisma/client';

import { z } from 'zod';

export const TourCreatevideosInputSchema: z.ZodType<Prisma.TourCreatevideosInput> = z.object({
  set: z.string().array()
}).strict();

export default TourCreatevideosInputSchema;
