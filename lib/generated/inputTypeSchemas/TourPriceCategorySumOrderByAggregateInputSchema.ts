import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TourPriceCategorySumOrderByAggregateInputSchema: z.ZodType<Prisma.TourPriceCategorySumOrderByAggregateInput> = z.object({
  sku: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TourPriceCategorySumOrderByAggregateInputSchema;
