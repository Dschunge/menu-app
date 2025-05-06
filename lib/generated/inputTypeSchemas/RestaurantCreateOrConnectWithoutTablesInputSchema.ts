import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { RestaurantWhereUniqueInputSchema } from './RestaurantWhereUniqueInputSchema';
import { RestaurantCreateWithoutTablesInputSchema } from './RestaurantCreateWithoutTablesInputSchema';
import { RestaurantUncheckedCreateWithoutTablesInputSchema } from './RestaurantUncheckedCreateWithoutTablesInputSchema';

export const RestaurantCreateOrConnectWithoutTablesInputSchema: z.ZodType<Prisma.RestaurantCreateOrConnectWithoutTablesInput> = z.object({
  where: z.lazy(() => RestaurantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RestaurantCreateWithoutTablesInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutTablesInputSchema) ]),
}).strict();

export default RestaurantCreateOrConnectWithoutTablesInputSchema;
