import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SpaCountOrderByAggregateInputSchema } from './SpaCountOrderByAggregateInputSchema';
import { SpaMaxOrderByAggregateInputSchema } from './SpaMaxOrderByAggregateInputSchema';
import { SpaMinOrderByAggregateInputSchema } from './SpaMinOrderByAggregateInputSchema';

export const SpaOrderByWithAggregationInputSchema: z.ZodType<Prisma.SpaOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  name_esp: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  description_esp: z.lazy(() => SortOrderSchema).optional(),
  hotelId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  videos: z.lazy(() => SortOrderSchema).optional(),
  images: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SpaCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SpaMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SpaMinOrderByAggregateInputSchema).optional()
}).strict();

export default SpaOrderByWithAggregationInputSchema;
