import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { CategoryCreateWithoutSubcategoriesInputSchema } from './CategoryCreateWithoutSubcategoriesInputSchema';
import { CategoryUncheckedCreateWithoutSubcategoriesInputSchema } from './CategoryUncheckedCreateWithoutSubcategoriesInputSchema';
import { CategoryCreateOrConnectWithoutSubcategoriesInputSchema } from './CategoryCreateOrConnectWithoutSubcategoriesInputSchema';
import { CategoryUpsertWithoutSubcategoriesInputSchema } from './CategoryUpsertWithoutSubcategoriesInputSchema';
import { CategoryWhereUniqueInputSchema } from './CategoryWhereUniqueInputSchema';
import { CategoryUpdateToOneWithWhereWithoutSubcategoriesInputSchema } from './CategoryUpdateToOneWithWhereWithoutSubcategoriesInputSchema';
import { CategoryUpdateWithoutSubcategoriesInputSchema } from './CategoryUpdateWithoutSubcategoriesInputSchema';
import { CategoryUncheckedUpdateWithoutSubcategoriesInputSchema } from './CategoryUncheckedUpdateWithoutSubcategoriesInputSchema';

export const CategoryUpdateOneRequiredWithoutSubcategoriesNestedInputSchema: z.ZodType<Prisma.CategoryUpdateOneRequiredWithoutSubcategoriesNestedInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutSubcategoriesInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutSubcategoriesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CategoryCreateOrConnectWithoutSubcategoriesInputSchema).optional(),
  upsert: z.lazy(() => CategoryUpsertWithoutSubcategoriesInputSchema).optional(),
  connect: z.lazy(() => CategoryWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CategoryUpdateToOneWithWhereWithoutSubcategoriesInputSchema),z.lazy(() => CategoryUpdateWithoutSubcategoriesInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutSubcategoriesInputSchema) ]).optional(),
}).strict();

export default CategoryUpdateOneRequiredWithoutSubcategoriesNestedInputSchema;
