import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { HotelCountOrderByAggregateInputSchema } from './HotelCountOrderByAggregateInputSchema';
import { HotelAvgOrderByAggregateInputSchema } from './HotelAvgOrderByAggregateInputSchema';
import { HotelMaxOrderByAggregateInputSchema } from './HotelMaxOrderByAggregateInputSchema';
import { HotelMinOrderByAggregateInputSchema } from './HotelMinOrderByAggregateInputSchema';
import { HotelSumOrderByAggregateInputSchema } from './HotelSumOrderByAggregateInputSchema';

export const HotelOrderByWithAggregationInputSchema: z.ZodType<Prisma.HotelOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  description_esp: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  country: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  city: z.lazy(() => SortOrderSchema).optional(),
  locationDescription: z.lazy(() => SortOrderSchema).optional(),
  locationDescription_esp: z.lazy(() => SortOrderSchema).optional(),
  images: z.lazy(() => SortOrderSchema).optional(),
  videos: z.lazy(() => SortOrderSchema).optional(),
  lat: z.lazy(() => SortOrderSchema).optional(),
  lng: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  phone_reservation: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  phone_tollfree: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  website: z.lazy(() => SortOrderSchema).optional(),
  facebook: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  tripadvisor: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  instagram: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  youtube: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  whatsapp: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => HotelCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => HotelAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => HotelMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => HotelMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => HotelSumOrderByAggregateInputSchema).optional()
}).strict();

export default HotelOrderByWithAggregationInputSchema;
