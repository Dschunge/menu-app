import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SubcategoryWhereInputSchema } from './SubcategoryWhereInputSchema';
import { SubcategoryUpdateWithoutSubSubcategoriesInputSchema } from './SubcategoryUpdateWithoutSubSubcategoriesInputSchema';
import { SubcategoryUncheckedUpdateWithoutSubSubcategoriesInputSchema } from './SubcategoryUncheckedUpdateWithoutSubSubcategoriesInputSchema';

export const SubcategoryUpdateToOneWithWhereWithoutSubSubcategoriesInputSchema: z.ZodType<Prisma.SubcategoryUpdateToOneWithWhereWithoutSubSubcategoriesInput> = z.object({
  where: z.lazy(() => SubcategoryWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => SubcategoryUpdateWithoutSubSubcategoriesInputSchema),z.lazy(() => SubcategoryUncheckedUpdateWithoutSubSubcategoriesInputSchema) ]),
}).strict();

export default SubcategoryUpdateToOneWithWhereWithoutSubSubcategoriesInputSchema;
