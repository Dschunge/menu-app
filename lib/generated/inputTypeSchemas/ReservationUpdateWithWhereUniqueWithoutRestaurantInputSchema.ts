import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ReservationWhereUniqueInputSchema } from './ReservationWhereUniqueInputSchema';
import { ReservationUpdateWithoutRestaurantInputSchema } from './ReservationUpdateWithoutRestaurantInputSchema';
import { ReservationUncheckedUpdateWithoutRestaurantInputSchema } from './ReservationUncheckedUpdateWithoutRestaurantInputSchema';

export const ReservationUpdateWithWhereUniqueWithoutRestaurantInputSchema: z.ZodType<Prisma.ReservationUpdateWithWhereUniqueWithoutRestaurantInput> = z.object({
  where: z.lazy(() => ReservationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ReservationUpdateWithoutRestaurantInputSchema),z.lazy(() => ReservationUncheckedUpdateWithoutRestaurantInputSchema) ]),
}).strict();

export default ReservationUpdateWithWhereUniqueWithoutRestaurantInputSchema;
