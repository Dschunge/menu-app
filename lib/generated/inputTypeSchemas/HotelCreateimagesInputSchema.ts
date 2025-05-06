import type { Prisma } from '../../prisma/client';

import { z } from 'zod';

export const HotelCreateimagesInputSchema: z.ZodType<Prisma.HotelCreateimagesInput> = z.object({
  set: z.string().array()
}).strict();

export default HotelCreateimagesInputSchema;
