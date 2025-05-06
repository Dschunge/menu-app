import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ReservationCreateManyRestaurantInputSchema } from './ReservationCreateManyRestaurantInputSchema';

export const ReservationCreateManyRestaurantInputEnvelopeSchema: z.ZodType<Prisma.ReservationCreateManyRestaurantInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ReservationCreateManyRestaurantInputSchema),z.lazy(() => ReservationCreateManyRestaurantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ReservationCreateManyRestaurantInputEnvelopeSchema;
