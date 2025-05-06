import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TableCountOrderByAggregateInputSchema } from './TableCountOrderByAggregateInputSchema';
import { TableAvgOrderByAggregateInputSchema } from './TableAvgOrderByAggregateInputSchema';
import { TableMaxOrderByAggregateInputSchema } from './TableMaxOrderByAggregateInputSchema';
import { TableMinOrderByAggregateInputSchema } from './TableMinOrderByAggregateInputSchema';
import { TableSumOrderByAggregateInputSchema } from './TableSumOrderByAggregateInputSchema';

export const TableOrderByWithAggregationInputSchema: z.ZodType<Prisma.TableOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  number: z.lazy(() => SortOrderSchema).optional(),
  capacity: z.lazy(() => SortOrderSchema).optional(),
  location: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  restaurantId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TableCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TableAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TableMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TableMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TableSumOrderByAggregateInputSchema).optional()
}).strict();

export default TableOrderByWithAggregationInputSchema;
