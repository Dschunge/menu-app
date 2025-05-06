import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { DishUncheckedCreateNestedManyWithoutCategoryInputSchema } from './DishUncheckedCreateNestedManyWithoutCategoryInputSchema';

export const CategoryUncheckedCreateWithoutSubcategoriesInputSchema: z.ZodType<Prisma.CategoryUncheckedCreateWithoutSubcategoriesInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  name_esp: z.string().optional().nullable(),
  slug: z.string(),
  description: z.string().optional().nullable(),
  description_esp: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  restaurantId: z.string(),
  postition: z.number().int().optional(),
  dishes: z.lazy(() => DishUncheckedCreateNestedManyWithoutCategoryInputSchema).optional()
}).strict();

export default CategoryUncheckedCreateWithoutSubcategoriesInputSchema;
