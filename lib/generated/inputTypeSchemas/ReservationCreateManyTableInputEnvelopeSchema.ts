import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ReservationCreateManyTableInputSchema } from './ReservationCreateManyTableInputSchema';

export const ReservationCreateManyTableInputEnvelopeSchema: z.ZodType<Prisma.ReservationCreateManyTableInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ReservationCreateManyTableInputSchema),z.lazy(() => ReservationCreateManyTableInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ReservationCreateManyTableInputEnvelopeSchema;
