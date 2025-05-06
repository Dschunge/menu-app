import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SubcategoryOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SubcategoryOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SubcategoryOrderByRelationAggregateInputSchema;
