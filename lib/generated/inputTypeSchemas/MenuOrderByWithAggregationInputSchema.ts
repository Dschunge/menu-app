import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { MenuCountOrderByAggregateInputSchema } from './MenuCountOrderByAggregateInputSchema';
import { MenuAvgOrderByAggregateInputSchema } from './MenuAvgOrderByAggregateInputSchema';
import { MenuMaxOrderByAggregateInputSchema } from './MenuMaxOrderByAggregateInputSchema';
import { MenuMinOrderByAggregateInputSchema } from './MenuMinOrderByAggregateInputSchema';
import { MenuSumOrderByAggregateInputSchema } from './MenuSumOrderByAggregateInputSchema';

export const MenuOrderByWithAggregationInputSchema: z.ZodType<Prisma.MenuOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  name_esp: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  description_esp: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  image: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  restaurantId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => MenuCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => MenuAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => MenuMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => MenuMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => MenuSumOrderByAggregateInputSchema).optional()
}).strict();

export default MenuOrderByWithAggregationInputSchema;
