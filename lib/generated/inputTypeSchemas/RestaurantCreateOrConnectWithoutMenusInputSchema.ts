import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { RestaurantWhereUniqueInputSchema } from './RestaurantWhereUniqueInputSchema';
import { RestaurantCreateWithoutMenusInputSchema } from './RestaurantCreateWithoutMenusInputSchema';
import { RestaurantUncheckedCreateWithoutMenusInputSchema } from './RestaurantUncheckedCreateWithoutMenusInputSchema';

export const RestaurantCreateOrConnectWithoutMenusInputSchema: z.ZodType<Prisma.RestaurantCreateOrConnectWithoutMenusInput> = z.object({
  where: z.lazy(() => RestaurantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RestaurantCreateWithoutMenusInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutMenusInputSchema) ]),
}).strict();

export default RestaurantCreateOrConnectWithoutMenusInputSchema;
