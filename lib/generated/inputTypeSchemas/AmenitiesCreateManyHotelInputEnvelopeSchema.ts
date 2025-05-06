import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { AmenitiesCreateManyHotelInputSchema } from './AmenitiesCreateManyHotelInputSchema';

export const AmenitiesCreateManyHotelInputEnvelopeSchema: z.ZodType<Prisma.AmenitiesCreateManyHotelInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AmenitiesCreateManyHotelInputSchema),z.lazy(() => AmenitiesCreateManyHotelInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default AmenitiesCreateManyHotelInputEnvelopeSchema;
