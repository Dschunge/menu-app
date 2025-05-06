import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { RestaurantUpdateWithoutReservationsInputSchema } from './RestaurantUpdateWithoutReservationsInputSchema';
import { RestaurantUncheckedUpdateWithoutReservationsInputSchema } from './RestaurantUncheckedUpdateWithoutReservationsInputSchema';
import { RestaurantCreateWithoutReservationsInputSchema } from './RestaurantCreateWithoutReservationsInputSchema';
import { RestaurantUncheckedCreateWithoutReservationsInputSchema } from './RestaurantUncheckedCreateWithoutReservationsInputSchema';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';

export const RestaurantUpsertWithoutReservationsInputSchema: z.ZodType<Prisma.RestaurantUpsertWithoutReservationsInput> = z.object({
  update: z.union([ z.lazy(() => RestaurantUpdateWithoutReservationsInputSchema),z.lazy(() => RestaurantUncheckedUpdateWithoutReservationsInputSchema) ]),
  create: z.union([ z.lazy(() => RestaurantCreateWithoutReservationsInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutReservationsInputSchema) ]),
  where: z.lazy(() => RestaurantWhereInputSchema).optional()
}).strict();

export default RestaurantUpsertWithoutReservationsInputSchema;
