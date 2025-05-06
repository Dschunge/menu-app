import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { RestaurantCreateWithoutMenusInputSchema } from './RestaurantCreateWithoutMenusInputSchema';
import { RestaurantUncheckedCreateWithoutMenusInputSchema } from './RestaurantUncheckedCreateWithoutMenusInputSchema';
import { RestaurantCreateOrConnectWithoutMenusInputSchema } from './RestaurantCreateOrConnectWithoutMenusInputSchema';
import { RestaurantWhereUniqueInputSchema } from './RestaurantWhereUniqueInputSchema';

export const RestaurantCreateNestedOneWithoutMenusInputSchema: z.ZodType<Prisma.RestaurantCreateNestedOneWithoutMenusInput> = z.object({
  create: z.union([ z.lazy(() => RestaurantCreateWithoutMenusInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutMenusInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RestaurantCreateOrConnectWithoutMenusInputSchema).optional(),
  connect: z.lazy(() => RestaurantWhereUniqueInputSchema).optional()
}).strict();

export default RestaurantCreateNestedOneWithoutMenusInputSchema;
