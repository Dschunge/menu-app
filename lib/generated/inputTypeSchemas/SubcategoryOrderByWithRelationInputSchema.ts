import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { CategoryOrderByWithRelationInputSchema } from './CategoryOrderByWithRelationInputSchema';
import { DishOrderByRelationAggregateInputSchema } from './DishOrderByRelationAggregateInputSchema';
import { SubSubcategoryOrderByRelationAggregateInputSchema } from './SubSubcategoryOrderByRelationAggregateInputSchema';
import { SubcategoryOrderByRelevanceInputSchema } from './SubcategoryOrderByRelevanceInputSchema';

export const SubcategoryOrderByWithRelationInputSchema: z.ZodType<Prisma.SubcategoryOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  name_esp: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  description_esp: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  image: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  parentCategoryId: z.lazy(() => SortOrderSchema).optional(),
  postition: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => CategoryOrderByWithRelationInputSchema).optional(),
  dishes: z.lazy(() => DishOrderByRelationAggregateInputSchema).optional(),
  subSubcategories: z.lazy(() => SubSubcategoryOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => SubcategoryOrderByRelevanceInputSchema).optional()
}).strict();

export default SubcategoryOrderByWithRelationInputSchema;
