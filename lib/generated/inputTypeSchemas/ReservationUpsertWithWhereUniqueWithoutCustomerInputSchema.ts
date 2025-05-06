import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ReservationWhereUniqueInputSchema } from './ReservationWhereUniqueInputSchema';
import { ReservationUpdateWithoutCustomerInputSchema } from './ReservationUpdateWithoutCustomerInputSchema';
import { ReservationUncheckedUpdateWithoutCustomerInputSchema } from './ReservationUncheckedUpdateWithoutCustomerInputSchema';
import { ReservationCreateWithoutCustomerInputSchema } from './ReservationCreateWithoutCustomerInputSchema';
import { ReservationUncheckedCreateWithoutCustomerInputSchema } from './ReservationUncheckedCreateWithoutCustomerInputSchema';

export const ReservationUpsertWithWhereUniqueWithoutCustomerInputSchema: z.ZodType<Prisma.ReservationUpsertWithWhereUniqueWithoutCustomerInput> = z.object({
  where: z.lazy(() => ReservationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ReservationUpdateWithoutCustomerInputSchema),z.lazy(() => ReservationUncheckedUpdateWithoutCustomerInputSchema) ]),
  create: z.union([ z.lazy(() => ReservationCreateWithoutCustomerInputSchema),z.lazy(() => ReservationUncheckedCreateWithoutCustomerInputSchema) ]),
}).strict();

export default ReservationUpsertWithWhereUniqueWithoutCustomerInputSchema;
