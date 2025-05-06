import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ReservationCreateWithoutRestaurantInputSchema } from './ReservationCreateWithoutRestaurantInputSchema';
import { ReservationUncheckedCreateWithoutRestaurantInputSchema } from './ReservationUncheckedCreateWithoutRestaurantInputSchema';
import { ReservationCreateOrConnectWithoutRestaurantInputSchema } from './ReservationCreateOrConnectWithoutRestaurantInputSchema';
import { ReservationCreateManyRestaurantInputEnvelopeSchema } from './ReservationCreateManyRestaurantInputEnvelopeSchema';
import { ReservationWhereUniqueInputSchema } from './ReservationWhereUniqueInputSchema';

export const ReservationUncheckedCreateNestedManyWithoutRestaurantInputSchema: z.ZodType<Prisma.ReservationUncheckedCreateNestedManyWithoutRestaurantInput> = z.object({
  create: z.union([ z.lazy(() => ReservationCreateWithoutRestaurantInputSchema),z.lazy(() => ReservationCreateWithoutRestaurantInputSchema).array(),z.lazy(() => ReservationUncheckedCreateWithoutRestaurantInputSchema),z.lazy(() => ReservationUncheckedCreateWithoutRestaurantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReservationCreateOrConnectWithoutRestaurantInputSchema),z.lazy(() => ReservationCreateOrConnectWithoutRestaurantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReservationCreateManyRestaurantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ReservationWhereUniqueInputSchema),z.lazy(() => ReservationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ReservationUncheckedCreateNestedManyWithoutRestaurantInputSchema;
