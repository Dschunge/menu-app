import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SubcategorySumOrderByAggregateInputSchema: z.ZodType<Prisma.SubcategorySumOrderByAggregateInput> = z.object({
  postition: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SubcategorySumOrderByAggregateInputSchema;
