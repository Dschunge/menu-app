import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { RestaurantWhereUniqueInputSchema } from './RestaurantWhereUniqueInputSchema';
import { RestaurantCreateWithoutOpeningHoursInputSchema } from './RestaurantCreateWithoutOpeningHoursInputSchema';
import { RestaurantUncheckedCreateWithoutOpeningHoursInputSchema } from './RestaurantUncheckedCreateWithoutOpeningHoursInputSchema';

export const RestaurantCreateOrConnectWithoutOpeningHoursInputSchema: z.ZodType<Prisma.RestaurantCreateOrConnectWithoutOpeningHoursInput> = z.object({
  where: z.lazy(() => RestaurantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RestaurantCreateWithoutOpeningHoursInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutOpeningHoursInputSchema) ]),
}).strict();

export default RestaurantCreateOrConnectWithoutOpeningHoursInputSchema;
