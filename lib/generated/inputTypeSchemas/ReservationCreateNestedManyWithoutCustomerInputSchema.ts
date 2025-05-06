import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ReservationCreateWithoutCustomerInputSchema } from './ReservationCreateWithoutCustomerInputSchema';
import { ReservationUncheckedCreateWithoutCustomerInputSchema } from './ReservationUncheckedCreateWithoutCustomerInputSchema';
import { ReservationCreateOrConnectWithoutCustomerInputSchema } from './ReservationCreateOrConnectWithoutCustomerInputSchema';
import { ReservationCreateManyCustomerInputEnvelopeSchema } from './ReservationCreateManyCustomerInputEnvelopeSchema';
import { ReservationWhereUniqueInputSchema } from './ReservationWhereUniqueInputSchema';

export const ReservationCreateNestedManyWithoutCustomerInputSchema: z.ZodType<Prisma.ReservationCreateNestedManyWithoutCustomerInput> = z.object({
  create: z.union([ z.lazy(() => ReservationCreateWithoutCustomerInputSchema),z.lazy(() => ReservationCreateWithoutCustomerInputSchema).array(),z.lazy(() => ReservationUncheckedCreateWithoutCustomerInputSchema),z.lazy(() => ReservationUncheckedCreateWithoutCustomerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReservationCreateOrConnectWithoutCustomerInputSchema),z.lazy(() => ReservationCreateOrConnectWithoutCustomerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReservationCreateManyCustomerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ReservationWhereUniqueInputSchema),z.lazy(() => ReservationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ReservationCreateNestedManyWithoutCustomerInputSchema;
