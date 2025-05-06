import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { RestaurantCountOrderByAggregateInputSchema } from './RestaurantCountOrderByAggregateInputSchema';
import { RestaurantAvgOrderByAggregateInputSchema } from './RestaurantAvgOrderByAggregateInputSchema';
import { RestaurantMaxOrderByAggregateInputSchema } from './RestaurantMaxOrderByAggregateInputSchema';
import { RestaurantMinOrderByAggregateInputSchema } from './RestaurantMinOrderByAggregateInputSchema';
import { RestaurantSumOrderByAggregateInputSchema } from './RestaurantSumOrderByAggregateInputSchema';

export const RestaurantOrderByWithAggregationInputSchema: z.ZodType<Prisma.RestaurantOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  descriptionshort: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  description_esp: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  descriptionshort_esp: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  image: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  address: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  city: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  state: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  zipCode: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  phone: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  email: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  website: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  listorder: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => RestaurantCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => RestaurantAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => RestaurantMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => RestaurantMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => RestaurantSumOrderByAggregateInputSchema).optional()
}).strict();

export default RestaurantOrderByWithAggregationInputSchema;
