import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ActivityOrderByRelationAggregateInputSchema } from './ActivityOrderByRelationAggregateInputSchema';
import { TourOrderByRelationAggregateInputSchema } from './TourOrderByRelationAggregateInputSchema';
import { SpaOrderByRelationAggregateInputSchema } from './SpaOrderByRelationAggregateInputSchema';
import { AmenitiesOrderByRelationAggregateInputSchema } from './AmenitiesOrderByRelationAggregateInputSchema';
import { TVChannelsOrderByRelationAggregateInputSchema } from './TVChannelsOrderByRelationAggregateInputSchema';
import { HotelOrderByRelevanceInputSchema } from './HotelOrderByRelevanceInputSchema';

export const HotelOrderByWithRelationInputSchema: z.ZodType<Prisma.HotelOrderByWithRelationInput> = z.object({
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
  activities: z.lazy(() => ActivityOrderByRelationAggregateInputSchema).optional(),
  tours: z.lazy(() => TourOrderByRelationAggregateInputSchema).optional(),
  spa: z.lazy(() => SpaOrderByRelationAggregateInputSchema).optional(),
  amenities: z.lazy(() => AmenitiesOrderByRelationAggregateInputSchema).optional(),
  tvchannels: z.lazy(() => TVChannelsOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => HotelOrderByRelevanceInputSchema).optional()
}).strict();

export default HotelOrderByWithRelationInputSchema;
