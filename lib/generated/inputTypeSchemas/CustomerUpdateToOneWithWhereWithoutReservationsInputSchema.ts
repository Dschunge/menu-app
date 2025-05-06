import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { CustomerWhereInputSchema } from './CustomerWhereInputSchema';
import { CustomerUpdateWithoutReservationsInputSchema } from './CustomerUpdateWithoutReservationsInputSchema';
import { CustomerUncheckedUpdateWithoutReservationsInputSchema } from './CustomerUncheckedUpdateWithoutReservationsInputSchema';

export const CustomerUpdateToOneWithWhereWithoutReservationsInputSchema: z.ZodType<Prisma.CustomerUpdateToOneWithWhereWithoutReservationsInput> = z.object({
  where: z.lazy(() => CustomerWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CustomerUpdateWithoutReservationsInputSchema),z.lazy(() => CustomerUncheckedUpdateWithoutReservationsInputSchema) ]),
}).strict();

export default CustomerUpdateToOneWithWhereWithoutReservationsInputSchema;
