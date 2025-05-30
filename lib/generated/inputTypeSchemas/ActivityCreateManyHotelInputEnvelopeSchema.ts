import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ActivityCreateManyHotelInputSchema } from './ActivityCreateManyHotelInputSchema';

export const ActivityCreateManyHotelInputEnvelopeSchema: z.ZodType<Prisma.ActivityCreateManyHotelInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ActivityCreateManyHotelInputSchema),z.lazy(() => ActivityCreateManyHotelInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ActivityCreateManyHotelInputEnvelopeSchema;
