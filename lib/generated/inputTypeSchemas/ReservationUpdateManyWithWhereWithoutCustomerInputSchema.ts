import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ReservationScalarWhereInputSchema } from './ReservationScalarWhereInputSchema';
import { ReservationUpdateManyMutationInputSchema } from './ReservationUpdateManyMutationInputSchema';
import { ReservationUncheckedUpdateManyWithoutCustomerInputSchema } from './ReservationUncheckedUpdateManyWithoutCustomerInputSchema';

export const ReservationUpdateManyWithWhereWithoutCustomerInputSchema: z.ZodType<Prisma.ReservationUpdateManyWithWhereWithoutCustomerInput> = z.object({
  where: z.lazy(() => ReservationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ReservationUpdateManyMutationInputSchema),z.lazy(() => ReservationUncheckedUpdateManyWithoutCustomerInputSchema) ]),
}).strict();

export default ReservationUpdateManyWithWhereWithoutCustomerInputSchema;
