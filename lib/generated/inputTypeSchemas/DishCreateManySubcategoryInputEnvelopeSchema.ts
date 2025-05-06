import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { DishCreateManySubcategoryInputSchema } from './DishCreateManySubcategoryInputSchema';

export const DishCreateManySubcategoryInputEnvelopeSchema: z.ZodType<Prisma.DishCreateManySubcategoryInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => DishCreateManySubcategoryInputSchema),z.lazy(() => DishCreateManySubcategoryInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default DishCreateManySubcategoryInputEnvelopeSchema;
