import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SubcategoryUncheckedCreateNestedManyWithoutCategoryInputSchema } from './SubcategoryUncheckedCreateNestedManyWithoutCategoryInputSchema';

export const CategoryUncheckedCreateWithoutDishesInputSchema: z.ZodType<Prisma.CategoryUncheckedCreateWithoutDishesInput> = z.object({
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
  subcategories: z.lazy(() => SubcategoryUncheckedCreateNestedManyWithoutCategoryInputSchema).optional()
}).strict();

export default CategoryUncheckedCreateWithoutDishesInputSchema;
