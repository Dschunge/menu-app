import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';
import { RestaurantUpdateWithoutMenusInputSchema } from './RestaurantUpdateWithoutMenusInputSchema';
import { RestaurantUncheckedUpdateWithoutMenusInputSchema } from './RestaurantUncheckedUpdateWithoutMenusInputSchema';

export const RestaurantUpdateToOneWithWhereWithoutMenusInputSchema: z.ZodType<Prisma.RestaurantUpdateToOneWithWhereWithoutMenusInput> = z.object({
  where: z.lazy(() => RestaurantWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => RestaurantUpdateWithoutMenusInputSchema),z.lazy(() => RestaurantUncheckedUpdateWithoutMenusInputSchema) ]),
}).strict();

export default RestaurantUpdateToOneWithWhereWithoutMenusInputSchema;
