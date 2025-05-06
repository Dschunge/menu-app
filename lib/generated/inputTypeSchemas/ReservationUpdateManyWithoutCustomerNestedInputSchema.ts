import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ReservationCreateWithoutCustomerInputSchema } from './ReservationCreateWithoutCustomerInputSchema';
import { ReservationUncheckedCreateWithoutCustomerInputSchema } from './ReservationUncheckedCreateWithoutCustomerInputSchema';
import { ReservationCreateOrConnectWithoutCustomerInputSchema } from './ReservationCreateOrConnectWithoutCustomerInputSchema';
import { ReservationUpsertWithWhereUniqueWithoutCustomerInputSchema } from './ReservationUpsertWithWhereUniqueWithoutCustomerInputSchema';
import { ReservationCreateManyCustomerInputEnvelopeSchema } from './ReservationCreateManyCustomerInputEnvelopeSchema';
import { ReservationWhereUniqueInputSchema } from './ReservationWhereUniqueInputSchema';
import { ReservationUpdateWithWhereUniqueWithoutCustomerInputSchema } from './ReservationUpdateWithWhereUniqueWithoutCustomerInputSchema';
import { ReservationUpdateManyWithWhereWithoutCustomerInputSchema } from './ReservationUpdateManyWithWhereWithoutCustomerInputSchema';
import { ReservationScalarWhereInputSchema } from './ReservationScalarWhereInputSchema';

export const ReservationUpdateManyWithoutCustomerNestedInputSchema: z.ZodType<Prisma.ReservationUpdateManyWithoutCustomerNestedInput> = z.object({
  create: z.union([ z.lazy(() => ReservationCreateWithoutCustomerInputSchema),z.lazy(() => ReservationCreateWithoutCustomerInputSchema).array(),z.lazy(() => ReservationUncheckedCreateWithoutCustomerInputSchema),z.lazy(() => ReservationUncheckedCreateWithoutCustomerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReservationCreateOrConnectWithoutCustomerInputSchema),z.lazy(() => ReservationCreateOrConnectWithoutCustomerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ReservationUpsertWithWhereUniqueWithoutCustomerInputSchema),z.lazy(() => ReservationUpsertWithWhereUniqueWithoutCustomerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReservationCreateManyCustomerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ReservationWhereUniqueInputSchema),z.lazy(() => ReservationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ReservationWhereUniqueInputSchema),z.lazy(() => ReservationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ReservationWhereUniqueInputSchema),z.lazy(() => ReservationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ReservationWhereUniqueInputSchema),z.lazy(() => ReservationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ReservationUpdateWithWhereUniqueWithoutCustomerInputSchema),z.lazy(() => ReservationUpdateWithWhereUniqueWithoutCustomerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ReservationUpdateManyWithWhereWithoutCustomerInputSchema),z.lazy(() => ReservationUpdateManyWithWhereWithoutCustomerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ReservationScalarWhereInputSchema),z.lazy(() => ReservationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ReservationUpdateManyWithoutCustomerNestedInputSchema;
