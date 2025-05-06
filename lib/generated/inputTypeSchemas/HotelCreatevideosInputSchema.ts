import type { Prisma } from '../../prisma/client';

import { z } from 'zod';

export const HotelCreatevideosInputSchema: z.ZodType<Prisma.HotelCreatevideosInput> = z.object({
  set: z.string().array()
}).strict();

export default HotelCreatevideosInputSchema;
