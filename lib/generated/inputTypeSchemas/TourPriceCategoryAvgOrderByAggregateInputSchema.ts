import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TourPriceCategoryAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TourPriceCategoryAvgOrderByAggregateInput> = z.object({
  sku: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TourPriceCategoryAvgOrderByAggregateInputSchema;
