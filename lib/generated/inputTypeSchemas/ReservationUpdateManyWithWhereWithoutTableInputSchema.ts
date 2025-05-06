import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ReservationScalarWhereInputSchema } from './ReservationScalarWhereInputSchema';
import { ReservationUpdateManyMutationInputSchema } from './ReservationUpdateManyMutationInputSchema';
import { ReservationUncheckedUpdateManyWithoutTableInputSchema } from './ReservationUncheckedUpdateManyWithoutTableInputSchema';

export const ReservationUpdateManyWithWhereWithoutTableInputSchema: z.ZodType<Prisma.ReservationUpdateManyWithWhereWithoutTableInput> = z.object({
  where: z.lazy(() => ReservationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ReservationUpdateManyMutationInputSchema),z.lazy(() => ReservationUncheckedUpdateManyWithoutTableInputSchema) ]),
}).strict();

export default ReservationUpdateManyWithWhereWithoutTableInputSchema;
