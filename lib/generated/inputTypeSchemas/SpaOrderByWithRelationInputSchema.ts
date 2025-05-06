import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SpaPriceCategoryOrderByRelationAggregateInputSchema } from './SpaPriceCategoryOrderByRelationAggregateInputSchema';
import { HotelOrderByWithRelationInputSchema } from './HotelOrderByWithRelationInputSchema';
import { SpaOrderByRelevanceInputSchema } from './SpaOrderByRelevanceInputSchema';

export const SpaOrderByWithRelationInputSchema: z.ZodType<Prisma.SpaOrderByWithRelationInput> = z.object({
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
  pricecategory: z.lazy(() => SpaPriceCategoryOrderByRelationAggregateInputSchema).optional(),
  Hotel: z.lazy(() => HotelOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => SpaOrderByRelevanceInputSchema).optional()
}).strict();

export default SpaOrderByWithRelationInputSchema;
