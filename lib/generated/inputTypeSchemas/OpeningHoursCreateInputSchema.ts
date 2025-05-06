import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { RestaurantCreateNestedOneWithoutOpeningHoursInputSchema } from './RestaurantCreateNestedOneWithoutOpeningHoursInputSchema';

export const OpeningHoursCreateInputSchema: z.ZodType<Prisma.OpeningHoursCreateInput> = z.object({
  id: z.string().uuid().optional(),
  dayOfWeek: z.number().int(),
  openTime: z.string(),
  closeTime: z.string(),
  isClosed: z.boolean().optional(),
  restaurant: z.lazy(() => RestaurantCreateNestedOneWithoutOpeningHoursInputSchema)
}).strict();

export default OpeningHoursCreateInputSchema;
