import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';
import { RestaurantUpdateWithoutDishesInputSchema } from './RestaurantUpdateWithoutDishesInputSchema';
import { RestaurantUncheckedUpdateWithoutDishesInputSchema } from './RestaurantUncheckedUpdateWithoutDishesInputSchema';

export const RestaurantUpdateToOneWithWhereWithoutDishesInputSchema: z.ZodType<Prisma.RestaurantUpdateToOneWithWhereWithoutDishesInput> = z.object({
  where: z.lazy(() => RestaurantWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => RestaurantUpdateWithoutDishesInputSchema),z.lazy(() => RestaurantUncheckedUpdateWithoutDishesInputSchema) ]),
}).strict();

export default RestaurantUpdateToOneWithWhereWithoutDishesInputSchema;
