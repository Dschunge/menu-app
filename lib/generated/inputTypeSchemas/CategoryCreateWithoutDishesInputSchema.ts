import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { RestaurantCreateNestedOneWithoutCategoriesInputSchema } from './RestaurantCreateNestedOneWithoutCategoriesInputSchema';
import { SubcategoryCreateNestedManyWithoutCategoryInputSchema } from './SubcategoryCreateNestedManyWithoutCategoryInputSchema';

export const CategoryCreateWithoutDishesInputSchema: z.ZodType<Prisma.CategoryCreateWithoutDishesInput> = z.object({
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
  restaurant: z.lazy(() => RestaurantCreateNestedOneWithoutCategoriesInputSchema),
  subcategories: z.lazy(() => SubcategoryCreateNestedManyWithoutCategoryInputSchema).optional()
}).strict();

export default CategoryCreateWithoutDishesInputSchema;
