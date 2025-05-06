import type { Prisma } from '../../prisma/client';

import { z } from 'zod';

export const OpeningHoursCreateWithoutRestaurantInputSchema: z.ZodType<Prisma.OpeningHoursCreateWithoutRestaurantInput> = z.object({
  id: z.string().uuid().optional(),
  dayOfWeek: z.number().int(),
  openTime: z.string(),
  closeTime: z.string(),
  isClosed: z.boolean().optional()
}).strict();

export default OpeningHoursCreateWithoutRestaurantInputSchema;
