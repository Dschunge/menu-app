import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SubcategoryOrderByWithRelationInputSchema } from './SubcategoryOrderByWithRelationInputSchema';
import { DishOrderByRelationAggregateInputSchema } from './DishOrderByRelationAggregateInputSchema';
import { SubSubcategoryOrderByRelevanceInputSchema } from './SubSubcategoryOrderByRelevanceInputSchema';

export const SubSubcategoryOrderByWithRelationInputSchema: z.ZodType<Prisma.SubSubcategoryOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  name_esp: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  description_esp: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  image: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  parentSubcategoryId: z.lazy(() => SortOrderSchema).optional(),
  postition: z.lazy(() => SortOrderSchema).optional(),
  subcategory: z.lazy(() => SubcategoryOrderByWithRelationInputSchema).optional(),
  dishes: z.lazy(() => DishOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => SubSubcategoryOrderByRelevanceInputSchema).optional()
}).strict();

export default SubSubcategoryOrderByWithRelationInputSchema;
