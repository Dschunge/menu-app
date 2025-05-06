import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { DishUncheckedCreateNestedManyWithoutCategoryInputSchema } from './DishUncheckedCreateNestedManyWithoutCategoryInputSchema';
import { SubcategoryUncheckedCreateNestedManyWithoutCategoryInputSchema } from './SubcategoryUncheckedCreateNestedManyWithoutCategoryInputSchema';

export const CategoryUncheckedCreateWithoutRestaurantInputSchema: z.ZodType<Prisma.CategoryUncheckedCreateWithoutRestaurantInput> = z.object({
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
  dishes: z.lazy(() => DishUncheckedCreateNestedManyWithoutCategoryInputSchema).optional(),
  subcategories: z.lazy(() => SubcategoryUncheckedCreateNestedManyWithoutCategoryInputSchema).optional()
}).strict();

export default CategoryUncheckedCreateWithoutRestaurantInputSchema;
