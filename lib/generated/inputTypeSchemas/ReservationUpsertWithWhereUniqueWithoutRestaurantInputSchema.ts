import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ReservationWhereUniqueInputSchema } from './ReservationWhereUniqueInputSchema';
import { ReservationUpdateWithoutRestaurantInputSchema } from './ReservationUpdateWithoutRestaurantInputSchema';
import { ReservationUncheckedUpdateWithoutRestaurantInputSchema } from './ReservationUncheckedUpdateWithoutRestaurantInputSchema';
import { ReservationCreateWithoutRestaurantInputSchema } from './ReservationCreateWithoutRestaurantInputSchema';
import { ReservationUncheckedCreateWithoutRestaurantInputSchema } from './ReservationUncheckedCreateWithoutRestaurantInputSchema';

export const ReservationUpsertWithWhereUniqueWithoutRestaurantInputSchema: z.ZodType<Prisma.ReservationUpsertWithWhereUniqueWithoutRestaurantInput> = z.object({
  where: z.lazy(() => ReservationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ReservationUpdateWithoutRestaurantInputSchema),z.lazy(() => ReservationUncheckedUpdateWithoutRestaurantInputSchema) ]),
  create: z.union([ z.lazy(() => ReservationCreateWithoutRestaurantInputSchema),z.lazy(() => ReservationUncheckedCreateWithoutRestaurantInputSchema) ]),
}).strict();

export default ReservationUpsertWithWhereUniqueWithoutRestaurantInputSchema;
