import type { Prisma } from '../../prisma/client';

import { z } from 'zod';

export const SpaCreatevideosInputSchema: z.ZodType<Prisma.SpaCreatevideosInput> = z.object({
  set: z.string().array()
}).strict();

export default SpaCreatevideosInputSchema;
