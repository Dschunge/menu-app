import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { CategoryWhereInputSchema } from './CategoryWhereInputSchema';
import { CategoryUpdateWithoutSubcategoriesInputSchema } from './CategoryUpdateWithoutSubcategoriesInputSchema';
import { CategoryUncheckedUpdateWithoutSubcategoriesInputSchema } from './CategoryUncheckedUpdateWithoutSubcategoriesInputSchema';

export const CategoryUpdateToOneWithWhereWithoutSubcategoriesInputSchema: z.ZodType<Prisma.CategoryUpdateToOneWithWhereWithoutSubcategoriesInput> = z.object({
  where: z.lazy(() => CategoryWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CategoryUpdateWithoutSubcategoriesInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutSubcategoriesInputSchema) ]),
}).strict();

export default CategoryUpdateToOneWithWhereWithoutSubcategoriesInputSchema;
