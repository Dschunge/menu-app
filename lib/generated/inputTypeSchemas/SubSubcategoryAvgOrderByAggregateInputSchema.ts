import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SubSubcategoryAvgOrderByAggregateInputSchema: z.ZodType<Prisma.SubSubcategoryAvgOrderByAggregateInput> = z.object({
  postition: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SubSubcategoryAvgOrderByAggregateInputSchema;
