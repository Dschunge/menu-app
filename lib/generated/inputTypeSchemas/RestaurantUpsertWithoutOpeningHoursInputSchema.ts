import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { RestaurantUpdateWithoutOpeningHoursInputSchema } from './RestaurantUpdateWithoutOpeningHoursInputSchema';
import { RestaurantUncheckedUpdateWithoutOpeningHoursInputSchema } from './RestaurantUncheckedUpdateWithoutOpeningHoursInputSchema';
import { RestaurantCreateWithoutOpeningHoursInputSchema } from './RestaurantCreateWithoutOpeningHoursInputSchema';
import { RestaurantUncheckedCreateWithoutOpeningHoursInputSchema } from './RestaurantUncheckedCreateWithoutOpeningHoursInputSchema';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';

export const RestaurantUpsertWithoutOpeningHoursInputSchema: z.ZodType<Prisma.RestaurantUpsertWithoutOpeningHoursInput> = z.object({
  update: z.union([ z.lazy(() => RestaurantUpdateWithoutOpeningHoursInputSchema),z.lazy(() => RestaurantUncheckedUpdateWithoutOpeningHoursInputSchema) ]),
  create: z.union([ z.lazy(() => RestaurantCreateWithoutOpeningHoursInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutOpeningHoursInputSchema) ]),
  where: z.lazy(() => RestaurantWhereInputSchema).optional()
}).strict();

export default RestaurantUpsertWithoutOpeningHoursInputSchema;
