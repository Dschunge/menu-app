import type { Prisma } from '../../prisma/client';

import { z } from 'zod';

export const HotelUpdatevideosInputSchema: z.ZodType<Prisma.HotelUpdatevideosInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

export default HotelUpdatevideosInputSchema;
