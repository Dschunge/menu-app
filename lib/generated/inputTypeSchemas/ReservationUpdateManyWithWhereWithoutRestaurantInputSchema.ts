import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ReservationScalarWhereInputSchema } from './ReservationScalarWhereInputSchema';
import { ReservationUpdateManyMutationInputSchema } from './ReservationUpdateManyMutationInputSchema';
import { ReservationUncheckedUpdateManyWithoutRestaurantInputSchema } from './ReservationUncheckedUpdateManyWithoutRestaurantInputSchema';

export const ReservationUpdateManyWithWhereWithoutRestaurantInputSchema: z.ZodType<Prisma.ReservationUpdateManyWithWhereWithoutRestaurantInput> = z.object({
  where: z.lazy(() => ReservationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ReservationUpdateManyMutationInputSchema),z.lazy(() => ReservationUncheckedUpdateManyWithoutRestaurantInputSchema) ]),
}).strict();

export default ReservationUpdateManyWithWhereWithoutRestaurantInputSchema;
