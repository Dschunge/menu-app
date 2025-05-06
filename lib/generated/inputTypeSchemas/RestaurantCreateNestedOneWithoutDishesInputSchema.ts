import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { RestaurantCreateWithoutDishesInputSchema } from './RestaurantCreateWithoutDishesInputSchema';
import { RestaurantUncheckedCreateWithoutDishesInputSchema } from './RestaurantUncheckedCreateWithoutDishesInputSchema';
import { RestaurantCreateOrConnectWithoutDishesInputSchema } from './RestaurantCreateOrConnectWithoutDishesInputSchema';
import { RestaurantWhereUniqueInputSchema } from './RestaurantWhereUniqueInputSchema';

export const RestaurantCreateNestedOneWithoutDishesInputSchema: z.ZodType<Prisma.RestaurantCreateNestedOneWithoutDishesInput> = z.object({
  create: z.union([ z.lazy(() => RestaurantCreateWithoutDishesInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutDishesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RestaurantCreateOrConnectWithoutDishesInputSchema).optional(),
  connect: z.lazy(() => RestaurantWhereUniqueInputSchema).optional()
}).strict();

export default RestaurantCreateNestedOneWithoutDishesInputSchema;
