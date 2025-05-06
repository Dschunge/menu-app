import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { DishCreateNestedManyWithoutCategoryInputSchema } from './DishCreateNestedManyWithoutCategoryInputSchema';
import { SubcategoryCreateNestedManyWithoutCategoryInputSchema } from './SubcategoryCreateNestedManyWithoutCategoryInputSchema';

export const CategoryCreateWithoutRestaurantInputSchema: z.ZodType<Prisma.CategoryCreateWithoutRestaurantInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  name_esp: z.string().optional().nullable(),
  slug: z.string(),
  description: z.string().optional().nullable(),
  description_esp: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  postition: z.number().int().optional(),
  dishes: z.lazy(() => DishCreateNestedManyWithoutCategoryInputSchema).optional(),
  subcategories: z.lazy(() => SubcategoryCreateNestedManyWithoutCategoryInputSchema).optional()
}).strict();

export default CategoryCreateWithoutRestaurantInputSchema;
