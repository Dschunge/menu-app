import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { CategoryCreateWithoutSubcategoriesInputSchema } from './CategoryCreateWithoutSubcategoriesInputSchema';
import { CategoryUncheckedCreateWithoutSubcategoriesInputSchema } from './CategoryUncheckedCreateWithoutSubcategoriesInputSchema';
import { CategoryCreateOrConnectWithoutSubcategoriesInputSchema } from './CategoryCreateOrConnectWithoutSubcategoriesInputSchema';
import { CategoryWhereUniqueInputSchema } from './CategoryWhereUniqueInputSchema';

export const CategoryCreateNestedOneWithoutSubcategoriesInputSchema: z.ZodType<Prisma.CategoryCreateNestedOneWithoutSubcategoriesInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutSubcategoriesInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutSubcategoriesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CategoryCreateOrConnectWithoutSubcategoriesInputSchema).optional(),
  connect: z.lazy(() => CategoryWhereUniqueInputSchema).optional()
}).strict();

export default CategoryCreateNestedOneWithoutSubcategoriesInputSchema;
