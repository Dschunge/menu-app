import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SpaPriceCategoryCountOrderByAggregateInputSchema } from './SpaPriceCategoryCountOrderByAggregateInputSchema';
import { SpaPriceCategoryAvgOrderByAggregateInputSchema } from './SpaPriceCategoryAvgOrderByAggregateInputSchema';
import { SpaPriceCategoryMaxOrderByAggregateInputSchema } from './SpaPriceCategoryMaxOrderByAggregateInputSchema';
import { SpaPriceCategoryMinOrderByAggregateInputSchema } from './SpaPriceCategoryMinOrderByAggregateInputSchema';
import { SpaPriceCategorySumOrderByAggregateInputSchema } from './SpaPriceCategorySumOrderByAggregateInputSchema';

export const SpaPriceCategoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.SpaPriceCategoryOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sku: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  description_esp: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional(),
  spaId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SpaPriceCategoryCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => SpaPriceCategoryAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SpaPriceCategoryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SpaPriceCategoryMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => SpaPriceCategorySumOrderByAggregateInputSchema).optional()
}).strict();

export default SpaPriceCategoryOrderByWithAggregationInputSchema;
