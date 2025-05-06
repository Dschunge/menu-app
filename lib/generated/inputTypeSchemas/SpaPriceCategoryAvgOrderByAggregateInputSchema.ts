import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SpaPriceCategoryAvgOrderByAggregateInputSchema: z.ZodType<Prisma.SpaPriceCategoryAvgOrderByAggregateInput> = z.object({
  sku: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SpaPriceCategoryAvgOrderByAggregateInputSchema;
