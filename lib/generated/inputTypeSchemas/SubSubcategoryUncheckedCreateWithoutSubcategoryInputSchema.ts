import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { DishUncheckedCreateNestedManyWithoutSubSubcategoryInputSchema } from './DishUncheckedCreateNestedManyWithoutSubSubcategoryInputSchema';

export const SubSubcategoryUncheckedCreateWithoutSubcategoryInputSchema: z.ZodType<Prisma.SubSubcategoryUncheckedCreateWithoutSubcategoryInput> = z.object({
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
  dishes: z.lazy(() => DishUncheckedCreateNestedManyWithoutSubSubcategoryInputSchema).optional()
}).strict();

export default SubSubcategoryUncheckedCreateWithoutSubcategoryInputSchema;
