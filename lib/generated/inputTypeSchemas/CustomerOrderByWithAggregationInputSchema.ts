import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { CustomerCountOrderByAggregateInputSchema } from './CustomerCountOrderByAggregateInputSchema';
import { CustomerMaxOrderByAggregateInputSchema } from './CustomerMaxOrderByAggregateInputSchema';
import { CustomerMinOrderByAggregateInputSchema } from './CustomerMinOrderByAggregateInputSchema';

export const CustomerOrderByWithAggregationInputSchema: z.ZodType<Prisma.CustomerOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CustomerCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CustomerMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CustomerMinOrderByAggregateInputSchema).optional()
}).strict();

export default CustomerOrderByWithAggregationInputSchema;
