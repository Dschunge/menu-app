import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { CustomerUpdateWithoutReservationsInputSchema } from './CustomerUpdateWithoutReservationsInputSchema';
import { CustomerUncheckedUpdateWithoutReservationsInputSchema } from './CustomerUncheckedUpdateWithoutReservationsInputSchema';
import { CustomerCreateWithoutReservationsInputSchema } from './CustomerCreateWithoutReservationsInputSchema';
import { CustomerUncheckedCreateWithoutReservationsInputSchema } from './CustomerUncheckedCreateWithoutReservationsInputSchema';
import { CustomerWhereInputSchema } from './CustomerWhereInputSchema';

export const CustomerUpsertWithoutReservationsInputSchema: z.ZodType<Prisma.CustomerUpsertWithoutReservationsInput> = z.object({
  update: z.union([ z.lazy(() => CustomerUpdateWithoutReservationsInputSchema),z.lazy(() => CustomerUncheckedUpdateWithoutReservationsInputSchema) ]),
  create: z.union([ z.lazy(() => CustomerCreateWithoutReservationsInputSchema),z.lazy(() => CustomerUncheckedCreateWithoutReservationsInputSchema) ]),
  where: z.lazy(() => CustomerWhereInputSchema).optional()
}).strict();

export default CustomerUpsertWithoutReservationsInputSchema;
