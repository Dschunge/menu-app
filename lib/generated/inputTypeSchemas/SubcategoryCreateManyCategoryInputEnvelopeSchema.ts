import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SubcategoryCreateManyCategoryInputSchema } from './SubcategoryCreateManyCategoryInputSchema';

export const SubcategoryCreateManyCategoryInputEnvelopeSchema: z.ZodType<Prisma.SubcategoryCreateManyCategoryInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SubcategoryCreateManyCategoryInputSchema),z.lazy(() => SubcategoryCreateManyCategoryInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default SubcategoryCreateManyCategoryInputEnvelopeSchema;
