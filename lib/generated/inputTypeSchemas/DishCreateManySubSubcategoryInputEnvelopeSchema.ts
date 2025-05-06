import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { DishCreateManySubSubcategoryInputSchema } from './DishCreateManySubSubcategoryInputSchema';

export const DishCreateManySubSubcategoryInputEnvelopeSchema: z.ZodType<Prisma.DishCreateManySubSubcategoryInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => DishCreateManySubSubcategoryInputSchema),z.lazy(() => DishCreateManySubSubcategoryInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default DishCreateManySubSubcategoryInputEnvelopeSchema;
