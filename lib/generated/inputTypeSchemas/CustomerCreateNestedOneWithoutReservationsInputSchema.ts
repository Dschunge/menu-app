import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { CustomerCreateWithoutReservationsInputSchema } from './CustomerCreateWithoutReservationsInputSchema';
import { CustomerUncheckedCreateWithoutReservationsInputSchema } from './CustomerUncheckedCreateWithoutReservationsInputSchema';
import { CustomerCreateOrConnectWithoutReservationsInputSchema } from './CustomerCreateOrConnectWithoutReservationsInputSchema';
import { CustomerWhereUniqueInputSchema } from './CustomerWhereUniqueInputSchema';

export const CustomerCreateNestedOneWithoutReservationsInputSchema: z.ZodType<Prisma.CustomerCreateNestedOneWithoutReservationsInput> = z.object({
  create: z.union([ z.lazy(() => CustomerCreateWithoutReservationsInputSchema),z.lazy(() => CustomerUncheckedCreateWithoutReservationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CustomerCreateOrConnectWithoutReservationsInputSchema).optional(),
  connect: z.lazy(() => CustomerWhereUniqueInputSchema).optional()
}).strict();

export default CustomerCreateNestedOneWithoutReservationsInputSchema;
