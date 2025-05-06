import type { Prisma } from '../../prisma/client';

import { z } from 'zod';

export const OpeningHoursCreateManyRestaurantInputSchema: z.ZodType<Prisma.OpeningHoursCreateManyRestaurantInput> = z.object({
  id: z.string().uuid().optional(),
  dayOfWeek: z.number().int(),
  openTime: z.string(),
  closeTime: z.string(),
  isClosed: z.boolean().optional()
}).strict();

export default OpeningHoursCreateManyRestaurantInputSchema;
