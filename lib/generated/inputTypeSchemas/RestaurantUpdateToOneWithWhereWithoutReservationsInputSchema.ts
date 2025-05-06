import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';
import { RestaurantUpdateWithoutReservationsInputSchema } from './RestaurantUpdateWithoutReservationsInputSchema';
import { RestaurantUncheckedUpdateWithoutReservationsInputSchema } from './RestaurantUncheckedUpdateWithoutReservationsInputSchema';

export const RestaurantUpdateToOneWithWhereWithoutReservationsInputSchema: z.ZodType<Prisma.RestaurantUpdateToOneWithWhereWithoutReservationsInput> = z.object({
  where: z.lazy(() => RestaurantWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => RestaurantUpdateWithoutReservationsInputSchema),z.lazy(() => RestaurantUncheckedUpdateWithoutReservationsInputSchema) ]),
}).strict();

export default RestaurantUpdateToOneWithWhereWithoutReservationsInputSchema;
