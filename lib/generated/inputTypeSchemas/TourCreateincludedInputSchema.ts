import type { Prisma } from '../../prisma/client';

import { z } from 'zod';

export const TourCreateincludedInputSchema: z.ZodType<Prisma.TourCreateincludedInput> = z.object({
  set: z.string().array()
}).strict();

export default TourCreateincludedInputSchema;
