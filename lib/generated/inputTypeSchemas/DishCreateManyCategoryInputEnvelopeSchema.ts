import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { DishCreateManyCategoryInputSchema } from './DishCreateManyCategoryInputSchema';

export const DishCreateManyCategoryInputEnvelopeSchema: z.ZodType<Prisma.DishCreateManyCategoryInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => DishCreateManyCategoryInputSchema),z.lazy(() => DishCreateManyCategoryInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default DishCreateManyCategoryInputEnvelopeSchema;
