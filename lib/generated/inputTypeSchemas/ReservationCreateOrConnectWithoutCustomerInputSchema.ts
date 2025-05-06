import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ReservationWhereUniqueInputSchema } from './ReservationWhereUniqueInputSchema';
import { ReservationCreateWithoutCustomerInputSchema } from './ReservationCreateWithoutCustomerInputSchema';
import { ReservationUncheckedCreateWithoutCustomerInputSchema } from './ReservationUncheckedCreateWithoutCustomerInputSchema';

export const ReservationCreateOrConnectWithoutCustomerInputSchema: z.ZodType<Prisma.ReservationCreateOrConnectWithoutCustomerInput> = z.object({
  where: z.lazy(() => ReservationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ReservationCreateWithoutCustomerInputSchema),z.lazy(() => ReservationUncheckedCreateWithoutCustomerInputSchema) ]),
}).strict();

export default ReservationCreateOrConnectWithoutCustomerInputSchema;
