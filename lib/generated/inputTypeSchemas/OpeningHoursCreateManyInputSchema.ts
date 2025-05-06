import type { Prisma } from '../../prisma/client';

import { z } from 'zod';

export const OpeningHoursCreateManyInputSchema: z.ZodType<Prisma.OpeningHoursCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  dayOfWeek: z.number().int(),
  openTime: z.string(),
  closeTime: z.string(),
  isClosed: z.boolean().optional(),
  restaurantId: z.string()
}).strict();

export default OpeningHoursCreateManyInputSchema;
