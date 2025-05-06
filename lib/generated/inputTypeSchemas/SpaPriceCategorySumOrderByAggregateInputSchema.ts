import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SpaPriceCategorySumOrderByAggregateInputSchema: z.ZodType<Prisma.SpaPriceCategorySumOrderByAggregateInput> = z.object({
  sku: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SpaPriceCategorySumOrderByAggregateInputSchema;
