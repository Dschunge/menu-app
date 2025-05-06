import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ReservationWhereUniqueInputSchema } from './ReservationWhereUniqueInputSchema';
import { ReservationUpdateWithoutCustomerInputSchema } from './ReservationUpdateWithoutCustomerInputSchema';
import { ReservationUncheckedUpdateWithoutCustomerInputSchema } from './ReservationUncheckedUpdateWithoutCustomerInputSchema';

export const ReservationUpdateWithWhereUniqueWithoutCustomerInputSchema: z.ZodType<Prisma.ReservationUpdateWithWhereUniqueWithoutCustomerInput> = z.object({
  where: z.lazy(() => ReservationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ReservationUpdateWithoutCustomerInputSchema),z.lazy(() => ReservationUncheckedUpdateWithoutCustomerInputSchema) ]),
}).strict();

export default ReservationUpdateWithWhereUniqueWithoutCustomerInputSchema;
