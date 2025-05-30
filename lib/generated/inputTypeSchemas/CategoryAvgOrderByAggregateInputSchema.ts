import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CategoryAvgOrderByAggregateInputSchema: z.ZodType<Prisma.CategoryAvgOrderByAggregateInput> = z.object({
  postition: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default CategoryAvgOrderByAggregateInputSchema;
