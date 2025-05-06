import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SpaOrderByWithRelationInputSchema } from './SpaOrderByWithRelationInputSchema';
import { SpaPriceCategoryOrderByRelevanceInputSchema } from './SpaPriceCategoryOrderByRelevanceInputSchema';

export const SpaPriceCategoryOrderByWithRelationInputSchema: z.ZodType<Prisma.SpaPriceCategoryOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sku: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  description_esp: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional(),
  spaId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  spa: z.lazy(() => SpaOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => SpaPriceCategoryOrderByRelevanceInputSchema).optional()
}).strict();

export default SpaPriceCategoryOrderByWithRelationInputSchema;
