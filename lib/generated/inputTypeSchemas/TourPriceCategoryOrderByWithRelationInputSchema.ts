import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TourOrderByWithRelationInputSchema } from './TourOrderByWithRelationInputSchema';
import { TourPriceCategoryOrderByRelevanceInputSchema } from './TourPriceCategoryOrderByRelevanceInputSchema';

export const TourPriceCategoryOrderByWithRelationInputSchema: z.ZodType<Prisma.TourPriceCategoryOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sku: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  description_esp: z.lazy(() => SortOrderSchema).optional(),
  tourId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  Tour: z.lazy(() => TourOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => TourPriceCategoryOrderByRelevanceInputSchema).optional()
}).strict();

export default TourPriceCategoryOrderByWithRelationInputSchema;
