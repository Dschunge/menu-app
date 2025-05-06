import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { CategoryWhereUniqueInputSchema } from './CategoryWhereUniqueInputSchema';
import { CategoryCreateWithoutSubcategoriesInputSchema } from './CategoryCreateWithoutSubcategoriesInputSchema';
import { CategoryUncheckedCreateWithoutSubcategoriesInputSchema } from './CategoryUncheckedCreateWithoutSubcategoriesInputSchema';

export const CategoryCreateOrConnectWithoutSubcategoriesInputSchema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutSubcategoriesInput> = z.object({
  where: z.lazy(() => CategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CategoryCreateWithoutSubcategoriesInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutSubcategoriesInputSchema) ]),
}).strict();

export default CategoryCreateOrConnectWithoutSubcategoriesInputSchema;
