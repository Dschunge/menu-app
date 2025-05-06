import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { RestaurantOrderByWithRelationInputSchema } from './RestaurantOrderByWithRelationInputSchema';
import { DishOrderByRelationAggregateInputSchema } from './DishOrderByRelationAggregateInputSchema';
import { SubcategoryOrderByRelationAggregateInputSchema } from './SubcategoryOrderByRelationAggregateInputSchema';
import { CategoryOrderByRelevanceInputSchema } from './CategoryOrderByRelevanceInputSchema';

export const CategoryOrderByWithRelationInputSchema: z.ZodType<Prisma.CategoryOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  name_esp: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  description_esp: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  image: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  restaurantId: z.lazy(() => SortOrderSchema).optional(),
  postition: z.lazy(() => SortOrderSchema).optional(),
  restaurant: z.lazy(() => RestaurantOrderByWithRelationInputSchema).optional(),
  dishes: z.lazy(() => DishOrderByRelationAggregateInputSchema).optional(),
  subcategories: z.lazy(() => SubcategoryOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => CategoryOrderByRelevanceInputSchema).optional()
}).strict();

export default CategoryOrderByWithRelationInputSchema;
