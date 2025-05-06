import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { RestaurantWhereUniqueInputSchema } from './RestaurantWhereUniqueInputSchema';
import { RestaurantCreateWithoutDishesInputSchema } from './RestaurantCreateWithoutDishesInputSchema';
import { RestaurantUncheckedCreateWithoutDishesInputSchema } from './RestaurantUncheckedCreateWithoutDishesInputSchema';

export const RestaurantCreateOrConnectWithoutDishesInputSchema: z.ZodType<Prisma.RestaurantCreateOrConnectWithoutDishesInput> = z.object({
  where: z.lazy(() => RestaurantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RestaurantCreateWithoutDishesInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutDishesInputSchema) ]),
}).strict();

export default RestaurantCreateOrConnectWithoutDishesInputSchema;
