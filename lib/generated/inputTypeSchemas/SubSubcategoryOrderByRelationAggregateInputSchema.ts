import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SubSubcategoryOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SubSubcategoryOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SubSubcategoryOrderByRelationAggregateInputSchema;
