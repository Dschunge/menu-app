import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SubcategoryCountOrderByAggregateInputSchema } from './SubcategoryCountOrderByAggregateInputSchema';
import { SubcategoryAvgOrderByAggregateInputSchema } from './SubcategoryAvgOrderByAggregateInputSchema';
import { SubcategoryMaxOrderByAggregateInputSchema } from './SubcategoryMaxOrderByAggregateInputSchema';
import { SubcategoryMinOrderByAggregateInputSchema } from './SubcategoryMinOrderByAggregateInputSchema';
import { SubcategorySumOrderByAggregateInputSchema } from './SubcategorySumOrderByAggregateInputSchema';

export const SubcategoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.SubcategoryOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  name_esp: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  description_esp: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  image: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  parentCategoryId: z.lazy(() => SortOrderSchema).optional(),
  postition: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SubcategoryCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => SubcategoryAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SubcategoryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SubcategoryMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => SubcategorySumOrderByAggregateInputSchema).optional()
}).strict();

export default SubcategoryOrderByWithAggregationInputSchema;
