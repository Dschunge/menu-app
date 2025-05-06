import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TourPriceCategoryOrderByRelationAggregateInputSchema } from './TourPriceCategoryOrderByRelationAggregateInputSchema';
import { HotelOrderByWithRelationInputSchema } from './HotelOrderByWithRelationInputSchema';
import { TourOrderByRelevanceInputSchema } from './TourOrderByRelevanceInputSchema';

export const TourOrderByWithRelationInputSchema: z.ZodType<Prisma.TourOrderByWithRelationInput> = z.object({
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
  pricecategory: z.lazy(() => TourPriceCategoryOrderByRelationAggregateInputSchema).optional(),
  Hotel: z.lazy(() => HotelOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => TourOrderByRelevanceInputSchema).optional()
}).strict();

export default TourOrderByWithRelationInputSchema;
