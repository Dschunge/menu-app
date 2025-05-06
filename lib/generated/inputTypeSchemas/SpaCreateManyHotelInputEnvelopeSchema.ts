import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SpaCreateManyHotelInputSchema } from './SpaCreateManyHotelInputSchema';

export const SpaCreateManyHotelInputEnvelopeSchema: z.ZodType<Prisma.SpaCreateManyHotelInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SpaCreateManyHotelInputSchema),z.lazy(() => SpaCreateManyHotelInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default SpaCreateManyHotelInputEnvelopeSchema;
