import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SubcategoryUpdateWithoutSubSubcategoriesInputSchema } from './SubcategoryUpdateWithoutSubSubcategoriesInputSchema';
import { SubcategoryUncheckedUpdateWithoutSubSubcategoriesInputSchema } from './SubcategoryUncheckedUpdateWithoutSubSubcategoriesInputSchema';
import { SubcategoryCreateWithoutSubSubcategoriesInputSchema } from './SubcategoryCreateWithoutSubSubcategoriesInputSchema';
import { SubcategoryUncheckedCreateWithoutSubSubcategoriesInputSchema } from './SubcategoryUncheckedCreateWithoutSubSubcategoriesInputSchema';
import { SubcategoryWhereInputSchema } from './SubcategoryWhereInputSchema';

export const SubcategoryUpsertWithoutSubSubcategoriesInputSchema: z.ZodType<Prisma.SubcategoryUpsertWithoutSubSubcategoriesInput> = z.object({
  update: z.union([ z.lazy(() => SubcategoryUpdateWithoutSubSubcategoriesInputSchema),z.lazy(() => SubcategoryUncheckedUpdateWithoutSubSubcategoriesInputSchema) ]),
  create: z.union([ z.lazy(() => SubcategoryCreateWithoutSubSubcategoriesInputSchema),z.lazy(() => SubcategoryUncheckedCreateWithoutSubSubcategoriesInputSchema) ]),
  where: z.lazy(() => SubcategoryWhereInputSchema).optional()
}).strict();

export default SubcategoryUpsertWithoutSubSubcategoriesInputSchema;
