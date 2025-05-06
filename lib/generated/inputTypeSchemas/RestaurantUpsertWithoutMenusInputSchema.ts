import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { RestaurantUpdateWithoutMenusInputSchema } from './RestaurantUpdateWithoutMenusInputSchema';
import { RestaurantUncheckedUpdateWithoutMenusInputSchema } from './RestaurantUncheckedUpdateWithoutMenusInputSchema';
import { RestaurantCreateWithoutMenusInputSchema } from './RestaurantCreateWithoutMenusInputSchema';
import { RestaurantUncheckedCreateWithoutMenusInputSchema } from './RestaurantUncheckedCreateWithoutMenusInputSchema';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';

export const RestaurantUpsertWithoutMenusInputSchema: z.ZodType<Prisma.RestaurantUpsertWithoutMenusInput> = z.object({
  update: z.union([ z.lazy(() => RestaurantUpdateWithoutMenusInputSchema),z.lazy(() => RestaurantUncheckedUpdateWithoutMenusInputSchema) ]),
  create: z.union([ z.lazy(() => RestaurantCreateWithoutMenusInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutMenusInputSchema) ]),
  where: z.lazy(() => RestaurantWhereInputSchema).optional()
}).strict();

export default RestaurantUpsertWithoutMenusInputSchema;
