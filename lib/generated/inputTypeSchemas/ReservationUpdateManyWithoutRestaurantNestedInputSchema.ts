import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ReservationCreateWithoutRestaurantInputSchema } from './ReservationCreateWithoutRestaurantInputSchema';
import { ReservationUncheckedCreateWithoutRestaurantInputSchema } from './ReservationUncheckedCreateWithoutRestaurantInputSchema';
import { ReservationCreateOrConnectWithoutRestaurantInputSchema } from './ReservationCreateOrConnectWithoutRestaurantInputSchema';
import { ReservationUpsertWithWhereUniqueWithoutRestaurantInputSchema } from './ReservationUpsertWithWhereUniqueWithoutRestaurantInputSchema';
import { ReservationCreateManyRestaurantInputEnvelopeSchema } from './ReservationCreateManyRestaurantInputEnvelopeSchema';
import { ReservationWhereUniqueInputSchema } from './ReservationWhereUniqueInputSchema';
import { ReservationUpdateWithWhereUniqueWithoutRestaurantInputSchema } from './ReservationUpdateWithWhereUniqueWithoutRestaurantInputSchema';
import { ReservationUpdateManyWithWhereWithoutRestaurantInputSchema } from './ReservationUpdateManyWithWhereWithoutRestaurantInputSchema';
import { ReservationScalarWhereInputSchema } from './ReservationScalarWhereInputSchema';

export const ReservationUpdateManyWithoutRestaurantNestedInputSchema: z.ZodType<Prisma.ReservationUpdateManyWithoutRestaurantNestedInput> = z.object({
  create: z.union([ z.lazy(() => ReservationCreateWithoutRestaurantInputSchema),z.lazy(() => ReservationCreateWithoutRestaurantInputSchema).array(),z.lazy(() => ReservationUncheckedCreateWithoutRestaurantInputSchema),z.lazy(() => ReservationUncheckedCreateWithoutRestaurantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReservationCreateOrConnectWithoutRestaurantInputSchema),z.lazy(() => ReservationCreateOrConnectWithoutRestaurantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ReservationUpsertWithWhereUniqueWithoutRestaurantInputSchema),z.lazy(() => ReservationUpsertWithWhereUniqueWithoutRestaurantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReservationCreateManyRestaurantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ReservationWhereUniqueInputSchema),z.lazy(() => ReservationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ReservationWhereUniqueInputSchema),z.lazy(() => ReservationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ReservationWhereUniqueInputSchema),z.lazy(() => ReservationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ReservationWhereUniqueInputSchema),z.lazy(() => ReservationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ReservationUpdateWithWhereUniqueWithoutRestaurantInputSchema),z.lazy(() => ReservationUpdateWithWhereUniqueWithoutRestaurantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ReservationUpdateManyWithWhereWithoutRestaurantInputSchema),z.lazy(() => ReservationUpdateManyWithWhereWithoutRestaurantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ReservationScalarWhereInputSchema),z.lazy(() => ReservationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ReservationUpdateManyWithoutRestaurantNestedInputSchema;
