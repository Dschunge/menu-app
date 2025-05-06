import type { Prisma } from '../../prisma/client';

import { z } from 'zod';

export const OpeningHoursUncheckedCreateInputSchema: z.ZodType<Prisma.OpeningHoursUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  dayOfWeek: z.number().int(),
  openTime: z.string(),
  closeTime: z.string(),
  isClosed: z.boolean().optional(),
  restaurantId: z.string()
}).strict();

export default OpeningHoursUncheckedCreateInputSchema;
