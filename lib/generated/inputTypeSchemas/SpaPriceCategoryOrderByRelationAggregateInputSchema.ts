import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SpaPriceCategoryOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SpaPriceCategoryOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SpaPriceCategoryOrderByRelationAggregateInputSchema;
