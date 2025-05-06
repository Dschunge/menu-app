import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { CustomerWhereUniqueInputSchema } from './CustomerWhereUniqueInputSchema';
import { CustomerCreateWithoutReservationsInputSchema } from './CustomerCreateWithoutReservationsInputSchema';
import { CustomerUncheckedCreateWithoutReservationsInputSchema } from './CustomerUncheckedCreateWithoutReservationsInputSchema';

export const CustomerCreateOrConnectWithoutReservationsInputSchema: z.ZodType<Prisma.CustomerCreateOrConnectWithoutReservationsInput> = z.object({
  where: z.lazy(() => CustomerWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CustomerCreateWithoutReservationsInputSchema),z.lazy(() => CustomerUncheckedCreateWithoutReservationsInputSchema) ]),
}).strict();

export default CustomerCreateOrConnectWithoutReservationsInputSchema;
