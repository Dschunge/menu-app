import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { HotelOrderByWithRelationInputSchema } from './HotelOrderByWithRelationInputSchema';
import { AmenitiesOrderByRelevanceInputSchema } from './AmenitiesOrderByRelevanceInputSchema';

export const AmenitiesOrderByWithRelationInputSchema: z.ZodType<Prisma.AmenitiesOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  icon: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  amenitiestype: z.lazy(() => SortOrderSchema).optional(),
  hotelId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  Hotel: z.lazy(() => HotelOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => AmenitiesOrderByRelevanceInputSchema).optional()
}).strict();

export default AmenitiesOrderByWithRelationInputSchema;
