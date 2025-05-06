import type { Prisma } from '../../prisma/client';

import { z } from 'zod';

export const TourCreateofferedInputSchema: z.ZodType<Prisma.TourCreateofferedInput> = z.object({
  set: z.string().array()
}).strict();

export default TourCreateofferedInputSchema;
