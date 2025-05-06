import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ReservationWhereUniqueInputSchema } from './ReservationWhereUniqueInputSchema';
import { ReservationUpdateWithoutTableInputSchema } from './ReservationUpdateWithoutTableInputSchema';
import { ReservationUncheckedUpdateWithoutTableInputSchema } from './ReservationUncheckedUpdateWithoutTableInputSchema';

export const ReservationUpdateWithWhereUniqueWithoutTableInputSchema: z.ZodType<Prisma.ReservationUpdateWithWhereUniqueWithoutTableInput> = z.object({
  where: z.lazy(() => ReservationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ReservationUpdateWithoutTableInputSchema),z.lazy(() => ReservationUncheckedUpdateWithoutTableInputSchema) ]),
}).strict();

export default ReservationUpdateWithWhereUniqueWithoutTableInputSchema;
