import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { RestaurantCreateWithoutDishesInputSchema } from './RestaurantCreateWithoutDishesInputSchema';
import { RestaurantUncheckedCreateWithoutDishesInputSchema } from './RestaurantUncheckedCreateWithoutDishesInputSchema';
import { RestaurantCreateOrConnectWithoutDishesInputSchema } from './RestaurantCreateOrConnectWithoutDishesInputSchema';
import { RestaurantUpsertWithoutDishesInputSchema } from './RestaurantUpsertWithoutDishesInputSchema';
import { RestaurantWhereUniqueInputSchema } from './RestaurantWhereUniqueInputSchema';
import { RestaurantUpdateToOneWithWhereWithoutDishesInputSchema } from './RestaurantUpdateToOneWithWhereWithoutDishesInputSchema';
import { RestaurantUpdateWithoutDishesInputSchema } from './RestaurantUpdateWithoutDishesInputSchema';
import { RestaurantUncheckedUpdateWithoutDishesInputSchema } from './RestaurantUncheckedUpdateWithoutDishesInputSchema';

export const RestaurantUpdateOneRequiredWithoutDishesNestedInputSchema: z.ZodType<Prisma.RestaurantUpdateOneRequiredWithoutDishesNestedInput> = z.object({
  create: z.union([ z.lazy(() => RestaurantCreateWithoutDishesInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutDishesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RestaurantCreateOrConnectWithoutDishesInputSchema).optional(),
  upsert: z.lazy(() => RestaurantUpsertWithoutDishesInputSchema).optional(),
  connect: z.lazy(() => RestaurantWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => RestaurantUpdateToOneWithWhereWithoutDishesInputSchema),z.lazy(() => RestaurantUpdateWithoutDishesInputSchema),z.lazy(() => RestaurantUncheckedUpdateWithoutDishesInputSchema) ]).optional(),
}).strict();

export default RestaurantUpdateOneRequiredWithoutDishesNestedInputSchema;
