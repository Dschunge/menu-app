import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TourPriceCategoryCountOrderByAggregateInputSchema } from './TourPriceCategoryCountOrderByAggregateInputSchema';
import { TourPriceCategoryAvgOrderByAggregateInputSchema } from './TourPriceCategoryAvgOrderByAggregateInputSchema';
import { TourPriceCategoryMaxOrderByAggregateInputSchema } from './TourPriceCategoryMaxOrderByAggregateInputSchema';
import { TourPriceCategoryMinOrderByAggregateInputSchema } from './TourPriceCategoryMinOrderByAggregateInputSchema';
import { TourPriceCategorySumOrderByAggregateInputSchema } from './TourPriceCategorySumOrderByAggregateInputSchema';

export const TourPriceCategoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.TourPriceCategoryOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sku: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  description_esp: z.lazy(() => SortOrderSchema).optional(),
  tourId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TourPriceCategoryCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TourPriceCategoryAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TourPriceCategoryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TourPriceCategoryMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TourPriceCategorySumOrderByAggregateInputSchema).optional()
}).strict();

export default TourPriceCategoryOrderByWithAggregationInputSchema;
