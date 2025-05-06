import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { CategoryCreateNestedOneWithoutSubcategoriesInputSchema } from './CategoryCreateNestedOneWithoutSubcategoriesInputSchema';
import { DishCreateNestedManyWithoutSubcategoryInputSchema } from './DishCreateNestedManyWithoutSubcategoryInputSchema';

export const SubcategoryCreateWithoutSubSubcategoriesInputSchema: z.ZodType<Prisma.SubcategoryCreateWithoutSubSubcategoriesInput> = z.object({
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
  category: z.lazy(() => CategoryCreateNestedOneWithoutSubcategoriesInputSchema),
  dishes: z.lazy(() => DishCreateNestedManyWithoutSubcategoryInputSchema).optional()
}).strict();

export default SubcategoryCreateWithoutSubSubcategoriesInputSchema;
