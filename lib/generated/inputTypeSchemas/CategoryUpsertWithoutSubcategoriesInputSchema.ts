import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { CategoryUpdateWithoutSubcategoriesInputSchema } from './CategoryUpdateWithoutSubcategoriesInputSchema';
import { CategoryUncheckedUpdateWithoutSubcategoriesInputSchema } from './CategoryUncheckedUpdateWithoutSubcategoriesInputSchema';
import { CategoryCreateWithoutSubcategoriesInputSchema } from './CategoryCreateWithoutSubcategoriesInputSchema';
import { CategoryUncheckedCreateWithoutSubcategoriesInputSchema } from './CategoryUncheckedCreateWithoutSubcategoriesInputSchema';
import { CategoryWhereInputSchema } from './CategoryWhereInputSchema';

export const CategoryUpsertWithoutSubcategoriesInputSchema: z.ZodType<Prisma.CategoryUpsertWithoutSubcategoriesInput> = z.object({
  update: z.union([ z.lazy(() => CategoryUpdateWithoutSubcategoriesInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutSubcategoriesInputSchema) ]),
  create: z.union([ z.lazy(() => CategoryCreateWithoutSubcategoriesInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutSubcategoriesInputSchema) ]),
  where: z.lazy(() => CategoryWhereInputSchema).optional()
}).strict();

export default CategoryUpsertWithoutSubcategoriesInputSchema;
