import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SubcategoryAvgOrderByAggregateInputSchema: z.ZodType<Prisma.SubcategoryAvgOrderByAggregateInput> = z.object({
  postition: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SubcategoryAvgOrderByAggregateInputSchema;
