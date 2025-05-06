import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { RestaurantWhereUniqueInputSchema } from './RestaurantWhereUniqueInputSchema';
import { RestaurantCreateWithoutReservationsInputSchema } from './RestaurantCreateWithoutReservationsInputSchema';
import { RestaurantUncheckedCreateWithoutReservationsInputSchema } from './RestaurantUncheckedCreateWithoutReservationsInputSchema';

export const RestaurantCreateOrConnectWithoutReservationsInputSchema: z.ZodType<Prisma.RestaurantCreateOrConnectWithoutReservationsInput> = z.object({
  where: z.lazy(() => RestaurantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RestaurantCreateWithoutReservationsInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutReservationsInputSchema) ]),
}).strict();

export default RestaurantCreateOrConnectWithoutReservationsInputSchema;
