import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TVChannelsCreateManyHotelInputSchema } from './TVChannelsCreateManyHotelInputSchema';

export const TVChannelsCreateManyHotelInputEnvelopeSchema: z.ZodType<Prisma.TVChannelsCreateManyHotelInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TVChannelsCreateManyHotelInputSchema),z.lazy(() => TVChannelsCreateManyHotelInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default TVChannelsCreateManyHotelInputEnvelopeSchema;
