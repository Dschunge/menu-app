import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ReservationCreateManyCustomerInputSchema } from './ReservationCreateManyCustomerInputSchema';

export const ReservationCreateManyCustomerInputEnvelopeSchema: z.ZodType<Prisma.ReservationCreateManyCustomerInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ReservationCreateManyCustomerInputSchema),z.lazy(() => ReservationCreateManyCustomerInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ReservationCreateManyCustomerInputEnvelopeSchema;
