import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SubSubcategoryCreateManySubcategoryInputSchema } from './SubSubcategoryCreateManySubcategoryInputSchema';

export const SubSubcategoryCreateManySubcategoryInputEnvelopeSchema: z.ZodType<Prisma.SubSubcategoryCreateManySubcategoryInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SubSubcategoryCreateManySubcategoryInputSchema),z.lazy(() => SubSubcategoryCreateManySubcategoryInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default SubSubcategoryCreateManySubcategoryInputEnvelopeSchema;
