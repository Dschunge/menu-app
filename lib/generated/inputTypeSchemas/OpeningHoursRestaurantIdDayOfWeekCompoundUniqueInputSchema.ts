import type { Prisma } from '../../prisma/client';

import { z } from 'zod';

export const OpeningHoursRestaurantIdDayOfWeekCompoundUniqueInputSchema: z.ZodType<Prisma.OpeningHoursRestaurantIdDayOfWeekCompoundUniqueInput> = z.object({
  restaurantId: z.string(),
  dayOfWeek: z.number()
}).strict();

export default OpeningHoursRestaurantIdDayOfWeekCompoundUniqueInputSchema;
