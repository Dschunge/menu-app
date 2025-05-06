import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ReservationWhereUniqueInputSchema } from './ReservationWhereUniqueInputSchema';
import { ReservationCreateWithoutTableInputSchema } from './ReservationCreateWithoutTableInputSchema';
import { ReservationUncheckedCreateWithoutTableInputSchema } from './ReservationUncheckedCreateWithoutTableInputSchema';

export const ReservationCreateOrConnectWithoutTableInputSchema: z.ZodType<Prisma.ReservationCreateOrConnectWithoutTableInput> = z.object({
  where: z.lazy(() => ReservationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ReservationCreateWithoutTableInputSchema),z.lazy(() => ReservationUncheckedCreateWithoutTableInputSchema) ]),
}).strict();

export default ReservationCreateOrConnectWithoutTableInputSchema;
