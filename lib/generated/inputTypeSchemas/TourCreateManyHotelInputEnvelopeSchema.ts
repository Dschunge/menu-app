import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TourCreateManyHotelInputSchema } from './TourCreateManyHotelInputSchema';

export const TourCreateManyHotelInputEnvelopeSchema: z.ZodType<Prisma.TourCreateManyHotelInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TourCreateManyHotelInputSchema),z.lazy(() => TourCreateManyHotelInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default TourCreateManyHotelInputEnvelopeSchema;
