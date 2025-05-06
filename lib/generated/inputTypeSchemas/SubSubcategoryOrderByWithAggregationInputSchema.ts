import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SubSubcategoryCountOrderByAggregateInputSchema } from './SubSubcategoryCountOrderByAggregateInputSchema';
import { SubSubcategoryAvgOrderByAggregateInputSchema } from './SubSubcategoryAvgOrderByAggregateInputSchema';
import { SubSubcategoryMaxOrderByAggregateInputSchema } from './SubSubcategoryMaxOrderByAggregateInputSchema';
import { SubSubcategoryMinOrderByAggregateInputSchema } from './SubSubcategoryMinOrderByAggregateInputSchema';
import { SubSubcategorySumOrderByAggregateInputSchema } from './SubSubcategorySumOrderByAggregateInputSchema';

export const SubSubcategoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.SubSubcategoryOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  name_esp: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  description_esp: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  image: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  parentSubcategoryId: z.lazy(() => SortOrderSchema).optional(),
  postition: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SubSubcategoryCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => SubSubcategoryAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SubSubcategoryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SubSubcategoryMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => SubSubcategorySumOrderByAggregateInputSchema).optional()
}).strict();

export default SubSubcategoryOrderByWithAggregationInputSchema;
