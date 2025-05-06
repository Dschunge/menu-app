import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { RestaurantCreateNestedOneWithoutCategoriesInputSchema } from './RestaurantCreateNestedOneWithoutCategoriesInputSchema';
import { DishCreateNestedManyWithoutCategoryInputSchema } from './DishCreateNestedManyWithoutCategoryInputSchema';

export const CategoryCreateWithoutSubcategoriesInputSchema: z.ZodType<Prisma.CategoryCreateWithoutSubcategoriesInput> = z.object({
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
  dishes: z.lazy(() => DishCreateNestedManyWithoutCategoryInputSchema).optional()
}).strict();

export default CategoryCreateWithoutSubcategoriesInputSchema;
