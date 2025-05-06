import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { DishUncheckedCreateNestedManyWithoutSubcategoryInputSchema } from './DishUncheckedCreateNestedManyWithoutSubcategoryInputSchema';

export const SubcategoryUncheckedCreateWithoutSubSubcategoriesInputSchema: z.ZodType<Prisma.SubcategoryUncheckedCreateWithoutSubSubcategoriesInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  name_esp: z.string().optional().nullable(),
  slug: z.string(),
  description: z.string().optional().nullable(),
  description_esp: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  parentCategoryId: z.string(),
  postition: z.number().int().optional(),
  dishes: z.lazy(() => DishUncheckedCreateNestedManyWithoutSubcategoryInputSchema).optional()
}).strict();

export default SubcategoryUncheckedCreateWithoutSubSubcategoriesInputSchema;
