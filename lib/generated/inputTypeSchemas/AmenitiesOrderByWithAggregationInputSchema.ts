import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { AmenitiesCountOrderByAggregateInputSchema } from './AmenitiesCountOrderByAggregateInputSchema';
import { AmenitiesMaxOrderByAggregateInputSchema } from './AmenitiesMaxOrderByAggregateInputSchema';
import { AmenitiesMinOrderByAggregateInputSchema } from './AmenitiesMinOrderByAggregateInputSchema';

export const AmenitiesOrderByWithAggregationInputSchema: z.ZodType<Prisma.AmenitiesOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  icon: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  amenitiestype: z.lazy(() => SortOrderSchema).optional(),
  hotelId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AmenitiesCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AmenitiesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AmenitiesMinOrderByAggregateInputSchema).optional()
}).strict();

export default AmenitiesOrderByWithAggregationInputSchema;
