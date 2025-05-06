import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ReservationWhereUniqueInputSchema } from './ReservationWhereUniqueInputSchema';
import { ReservationCreateWithoutRestaurantInputSchema } from './ReservationCreateWithoutRestaurantInputSchema';
import { ReservationUncheckedCreateWithoutRestaurantInputSchema } from './ReservationUncheckedCreateWithoutRestaurantInputSchema';

export const ReservationCreateOrConnectWithoutRestaurantInputSchema: z.ZodType<Prisma.ReservationCreateOrConnectWithoutRestaurantInput> = z.object({
  where: z.lazy(() => ReservationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ReservationCreateWithoutRestaurantInputSchema),z.lazy(() => ReservationUncheckedCreateWithoutRestaurantInputSchema) ]),
}).strict();

export default ReservationCreateOrConnectWithoutRestaurantInputSchema;
