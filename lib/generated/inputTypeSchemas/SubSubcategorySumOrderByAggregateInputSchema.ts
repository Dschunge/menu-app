import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SubSubcategorySumOrderByAggregateInputSchema: z.ZodType<Prisma.SubSubcategorySumOrderByAggregateInput> = z.object({
  postition: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SubSubcategorySumOrderByAggregateInputSchema;
