import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';
import { RestaurantUpdateWithoutTablesInputSchema } from './RestaurantUpdateWithoutTablesInputSchema';
import { RestaurantUncheckedUpdateWithoutTablesInputSchema } from './RestaurantUncheckedUpdateWithoutTablesInputSchema';

export const RestaurantUpdateToOneWithWhereWithoutTablesInputSchema: z.ZodType<Prisma.RestaurantUpdateToOneWithWhereWithoutTablesInput> = z.object({
  where: z.lazy(() => RestaurantWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => RestaurantUpdateWithoutTablesInputSchema),z.lazy(() => RestaurantUncheckedUpdateWithoutTablesInputSchema) ]),
}).strict();

export default RestaurantUpdateToOneWithWhereWithoutTablesInputSchema;
