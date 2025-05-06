import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { RestaurantCreateWithoutOpeningHoursInputSchema } from './RestaurantCreateWithoutOpeningHoursInputSchema';
import { RestaurantUncheckedCreateWithoutOpeningHoursInputSchema } from './RestaurantUncheckedCreateWithoutOpeningHoursInputSchema';
import { RestaurantCreateOrConnectWithoutOpeningHoursInputSchema } from './RestaurantCreateOrConnectWithoutOpeningHoursInputSchema';
import { RestaurantWhereUniqueInputSchema } from './RestaurantWhereUniqueInputSchema';

export const RestaurantCreateNestedOneWithoutOpeningHoursInputSchema: z.ZodType<Prisma.RestaurantCreateNestedOneWithoutOpeningHoursInput> = z.object({
  create: z.union([ z.lazy(() => RestaurantCreateWithoutOpeningHoursInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutOpeningHoursInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RestaurantCreateOrConnectWithoutOpeningHoursInputSchema).optional(),
  connect: z.lazy(() => RestaurantWhereUniqueInputSchema).optional()
}).strict();

export default RestaurantCreateNestedOneWithoutOpeningHoursInputSchema;
