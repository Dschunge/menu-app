import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ReservationWhereUniqueInputSchema } from './ReservationWhereUniqueInputSchema';
import { ReservationUpdateWithoutTableInputSchema } from './ReservationUpdateWithoutTableInputSchema';
import { ReservationUncheckedUpdateWithoutTableInputSchema } from './ReservationUncheckedUpdateWithoutTableInputSchema';
import { ReservationCreateWithoutTableInputSchema } from './ReservationCreateWithoutTableInputSchema';
import { ReservationUncheckedCreateWithoutTableInputSchema } from './ReservationUncheckedCreateWithoutTableInputSchema';

export const ReservationUpsertWithWhereUniqueWithoutTableInputSchema: z.ZodType<Prisma.ReservationUpsertWithWhereUniqueWithoutTableInput> = z.object({
  where: z.lazy(() => ReservationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ReservationUpdateWithoutTableInputSchema),z.lazy(() => ReservationUncheckedUpdateWithoutTableInputSchema) ]),
  create: z.union([ z.lazy(() => ReservationCreateWithoutTableInputSchema),z.lazy(() => ReservationUncheckedCreateWithoutTableInputSchema) ]),
}).strict();

export default ReservationUpsertWithWhereUniqueWithoutTableInputSchema;
