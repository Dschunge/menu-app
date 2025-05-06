import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { RestaurantCreateWithoutReservationsInputSchema } from './RestaurantCreateWithoutReservationsInputSchema';
import { RestaurantUncheckedCreateWithoutReservationsInputSchema } from './RestaurantUncheckedCreateWithoutReservationsInputSchema';
import { RestaurantCreateOrConnectWithoutReservationsInputSchema } from './RestaurantCreateOrConnectWithoutReservationsInputSchema';
import { RestaurantWhereUniqueInputSchema } from './RestaurantWhereUniqueInputSchema';

export const RestaurantCreateNestedOneWithoutReservationsInputSchema: z.ZodType<Prisma.RestaurantCreateNestedOneWithoutReservationsInput> = z.object({
  create: z.union([ z.lazy(() => RestaurantCreateWithoutReservationsInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutReservationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RestaurantCreateOrConnectWithoutReservationsInputSchema).optional(),
  connect: z.lazy(() => RestaurantWhereUniqueInputSchema).optional()
}).strict();

export default RestaurantCreateNestedOneWithoutReservationsInputSchema;
