import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';
import { RestaurantUpdateWithoutOpeningHoursInputSchema } from './RestaurantUpdateWithoutOpeningHoursInputSchema';
import { RestaurantUncheckedUpdateWithoutOpeningHoursInputSchema } from './RestaurantUncheckedUpdateWithoutOpeningHoursInputSchema';

export const RestaurantUpdateToOneWithWhereWithoutOpeningHoursInputSchema: z.ZodType<Prisma.RestaurantUpdateToOneWithWhereWithoutOpeningHoursInput> = z.object({
  where: z.lazy(() => RestaurantWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => RestaurantUpdateWithoutOpeningHoursInputSchema),z.lazy(() => RestaurantUncheckedUpdateWithoutOpeningHoursInputSchema) ]),
}).strict();

export default RestaurantUpdateToOneWithWhereWithoutOpeningHoursInputSchema;
