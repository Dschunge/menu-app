import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { CategoryWhereInputSchema } from './CategoryWhereInputSchema';
import { CategoryUpdateWithoutDishesInputSchema } from './CategoryUpdateWithoutDishesInputSchema';
import { CategoryUncheckedUpdateWithoutDishesInputSchema } from './CategoryUncheckedUpdateWithoutDishesInputSchema';

export const CategoryUpdateToOneWithWhereWithoutDishesInputSchema: z.ZodType<Prisma.CategoryUpdateToOneWithWhereWithoutDishesInput> = z.object({
  where: z.lazy(() => CategoryWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CategoryUpdateWithoutDishesInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutDishesInputSchema) ]),
}).strict();

export default CategoryUpdateToOneWithWhereWithoutDishesInputSchema;
