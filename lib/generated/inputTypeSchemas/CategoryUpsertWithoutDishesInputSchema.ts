import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { CategoryUpdateWithoutDishesInputSchema } from './CategoryUpdateWithoutDishesInputSchema';
import { CategoryUncheckedUpdateWithoutDishesInputSchema } from './CategoryUncheckedUpdateWithoutDishesInputSchema';
import { CategoryCreateWithoutDishesInputSchema } from './CategoryCreateWithoutDishesInputSchema';
import { CategoryUncheckedCreateWithoutDishesInputSchema } from './CategoryUncheckedCreateWithoutDishesInputSchema';
import { CategoryWhereInputSchema } from './CategoryWhereInputSchema';

export const CategoryUpsertWithoutDishesInputSchema: z.ZodType<Prisma.CategoryUpsertWithoutDishesInput> = z.object({
  update: z.union([ z.lazy(() => CategoryUpdateWithoutDishesInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutDishesInputSchema) ]),
  create: z.union([ z.lazy(() => CategoryCreateWithoutDishesInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutDishesInputSchema) ]),
  where: z.lazy(() => CategoryWhereInputSchema).optional()
}).strict();

export default CategoryUpsertWithoutDishesInputSchema;
