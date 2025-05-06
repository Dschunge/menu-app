import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { RestaurantUpdateWithoutTablesInputSchema } from './RestaurantUpdateWithoutTablesInputSchema';
import { RestaurantUncheckedUpdateWithoutTablesInputSchema } from './RestaurantUncheckedUpdateWithoutTablesInputSchema';
import { RestaurantCreateWithoutTablesInputSchema } from './RestaurantCreateWithoutTablesInputSchema';
import { RestaurantUncheckedCreateWithoutTablesInputSchema } from './RestaurantUncheckedCreateWithoutTablesInputSchema';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';

export const RestaurantUpsertWithoutTablesInputSchema: z.ZodType<Prisma.RestaurantUpsertWithoutTablesInput> = z.object({
  update: z.union([ z.lazy(() => RestaurantUpdateWithoutTablesInputSchema),z.lazy(() => RestaurantUncheckedUpdateWithoutTablesInputSchema) ]),
  create: z.union([ z.lazy(() => RestaurantCreateWithoutTablesInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutTablesInputSchema) ]),
  where: z.lazy(() => RestaurantWhereInputSchema).optional()
}).strict();

export default RestaurantUpsertWithoutTablesInputSchema;
