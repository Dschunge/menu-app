import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { RestaurantOrderByWithRelationInputSchema } from './RestaurantOrderByWithRelationInputSchema';
import { CategoryOrderByWithRelationInputSchema } from './CategoryOrderByWithRelationInputSchema';
import { SubcategoryOrderByWithRelationInputSchema } from './SubcategoryOrderByWithRelationInputSchema';
import { SubSubcategoryOrderByWithRelationInputSchema } from './SubSubcategoryOrderByWithRelationInputSchema';
import { MenuOrderByWithRelationInputSchema } from './MenuOrderByWithRelationInputSchema';
import { DishOrderByRelevanceInputSchema } from './DishOrderByRelevanceInputSchema';

export const DishOrderByWithRelationInputSchema: z.ZodType<Prisma.DishOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sku: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  name_esp: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  description_esp: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  unit: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  image: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  restaurantId: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  subcategoryId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  subSubcategoryId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  availableAtDayOfWeek: z.lazy(() => SortOrderSchema).optional(),
  dietaryInfo: z.lazy(() => SortOrderSchema).optional(),
  allergens: z.lazy(() => SortOrderSchema).optional(),
  ingredients: z.lazy(() => SortOrderSchema).optional(),
  prepTime: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  isPopular: z.lazy(() => SortOrderSchema).optional(),
  isNew: z.lazy(() => SortOrderSchema).optional(),
  menuId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  course_number: z.lazy(() => SortOrderSchema).optional(),
  restaurant: z.lazy(() => RestaurantOrderByWithRelationInputSchema).optional(),
  category: z.lazy(() => CategoryOrderByWithRelationInputSchema).optional(),
  subcategory: z.lazy(() => SubcategoryOrderByWithRelationInputSchema).optional(),
  subSubcategory: z.lazy(() => SubSubcategoryOrderByWithRelationInputSchema).optional(),
  menu: z.lazy(() => MenuOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => DishOrderByRelevanceInputSchema).optional()
}).strict();

export default DishOrderByWithRelationInputSchema;
