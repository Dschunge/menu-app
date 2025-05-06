import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TourPriceCategoryCreateManyTourInputSchema } from './TourPriceCategoryCreateManyTourInputSchema';

export const TourPriceCategoryCreateManyTourInputEnvelopeSchema: z.ZodType<Prisma.TourPriceCategoryCreateManyTourInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TourPriceCategoryCreateManyTourInputSchema),z.lazy(() => TourPriceCategoryCreateManyTourInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default TourPriceCategoryCreateManyTourInputEnvelopeSchema;
