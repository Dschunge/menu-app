import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { RestaurantCreateWithoutTablesInputSchema } from './RestaurantCreateWithoutTablesInputSchema';
import { RestaurantUncheckedCreateWithoutTablesInputSchema } from './RestaurantUncheckedCreateWithoutTablesInputSchema';
import { RestaurantCreateOrConnectWithoutTablesInputSchema } from './RestaurantCreateOrConnectWithoutTablesInputSchema';
import { RestaurantWhereUniqueInputSchema } from './RestaurantWhereUniqueInputSchema';

export const RestaurantCreateNestedOneWithoutTablesInputSchema: z.ZodType<Prisma.RestaurantCreateNestedOneWithoutTablesInput> = z.object({
  create: z.union([ z.lazy(() => RestaurantCreateWithoutTablesInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutTablesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RestaurantCreateOrConnectWithoutTablesInputSchema).optional(),
  connect: z.lazy(() => RestaurantWhereUniqueInputSchema).optional()
}).strict();

export default RestaurantCreateNestedOneWithoutTablesInputSchema;
