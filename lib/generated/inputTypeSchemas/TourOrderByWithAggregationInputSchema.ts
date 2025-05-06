import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TourCountOrderByAggregateInputSchema } from './TourCountOrderByAggregateInputSchema';
import { TourAvgOrderByAggregateInputSchema } from './TourAvgOrderByAggregateInputSchema';
import { TourMaxOrderByAggregateInputSchema } from './TourMaxOrderByAggregateInputSchema';
import { TourMinOrderByAggregateInputSchema } from './TourMinOrderByAggregateInputSchema';
import { TourSumOrderByAggregateInputSchema } from './TourSumOrderByAggregateInputSchema';

export const TourOrderByWithAggregationInputSchema: z.ZodType<Prisma.TourOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  name_esp: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  description_esp: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  hotelId: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  priceKids: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  offer: z.lazy(() => SortOrderSchema).optional(),
  discount: z.lazy(() => SortOrderSchema).optional(),
  whattobring: z.lazy(() => SortOrderSchema).optional(),
  included: z.lazy(() => SortOrderSchema).optional(),
  pickuptime: z.lazy(() => SortOrderSchema).optional(),
  maxPeople: z.lazy(() => SortOrderSchema).optional(),
  minPeople: z.lazy(() => SortOrderSchema).optional(),
  minAge: z.lazy(() => SortOrderSchema).optional(),
  bestSeller: z.lazy(() => SortOrderSchema).optional(),
  priceInfo: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  offered: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional(),
  videos: z.lazy(() => SortOrderSchema).optional(),
  images: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TourCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TourAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TourMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TourMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TourSumOrderByAggregateInputSchema).optional()
}).strict();

export default TourOrderByWithAggregationInputSchema;
