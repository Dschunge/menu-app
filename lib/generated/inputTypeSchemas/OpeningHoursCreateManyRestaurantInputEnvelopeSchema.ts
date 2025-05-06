import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { OpeningHoursCreateManyRestaurantInputSchema } from './OpeningHoursCreateManyRestaurantInputSchema';

export const OpeningHoursCreateManyRestaurantInputEnvelopeSchema: z.ZodType<Prisma.OpeningHoursCreateManyRestaurantInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => OpeningHoursCreateManyRestaurantInputSchema),z.lazy(() => OpeningHoursCreateManyRestaurantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default OpeningHoursCreateManyRestaurantInputEnvelopeSchema;
