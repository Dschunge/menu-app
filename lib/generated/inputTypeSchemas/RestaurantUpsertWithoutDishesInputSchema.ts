import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { RestaurantUpdateWithoutDishesInputSchema } from './RestaurantUpdateWithoutDishesInputSchema';
import { RestaurantUncheckedUpdateWithoutDishesInputSchema } from './RestaurantUncheckedUpdateWithoutDishesInputSchema';
import { RestaurantCreateWithoutDishesInputSchema } from './RestaurantCreateWithoutDishesInputSchema';
import { RestaurantUncheckedCreateWithoutDishesInputSchema } from './RestaurantUncheckedCreateWithoutDishesInputSchema';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';

export const RestaurantUpsertWithoutDishesInputSchema: z.ZodType<Prisma.RestaurantUpsertWithoutDishesInput> = z.object({
  update: z.union([ z.lazy(() => RestaurantUpdateWithoutDishesInputSchema),z.lazy(() => RestaurantUncheckedUpdateWithoutDishesInputSchema) ]),
  create: z.union([ z.lazy(() => RestaurantCreateWithoutDishesInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutDishesInputSchema) ]),
  where: z.lazy(() => RestaurantWhereInputSchema).optional()
}).strict();

export default RestaurantUpsertWithoutDishesInputSchema;
