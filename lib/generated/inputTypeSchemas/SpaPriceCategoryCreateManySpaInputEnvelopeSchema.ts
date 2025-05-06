import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SpaPriceCategoryCreateManySpaInputSchema } from './SpaPriceCategoryCreateManySpaInputSchema';

export const SpaPriceCategoryCreateManySpaInputEnvelopeSchema: z.ZodType<Prisma.SpaPriceCategoryCreateManySpaInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SpaPriceCategoryCreateManySpaInputSchema),z.lazy(() => SpaPriceCategoryCreateManySpaInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default SpaPriceCategoryCreateManySpaInputEnvelopeSchema;
