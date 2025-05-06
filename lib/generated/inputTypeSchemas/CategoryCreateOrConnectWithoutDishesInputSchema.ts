import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { CategoryWhereUniqueInputSchema } from './CategoryWhereUniqueInputSchema';
import { CategoryCreateWithoutDishesInputSchema } from './CategoryCreateWithoutDishesInputSchema';
import { CategoryUncheckedCreateWithoutDishesInputSchema } from './CategoryUncheckedCreateWithoutDishesInputSchema';

export const CategoryCreateOrConnectWithoutDishesInputSchema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutDishesInput> = z.object({
  where: z.lazy(() => CategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CategoryCreateWithoutDishesInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutDishesInputSchema) ]),
}).strict();

export default CategoryCreateOrConnectWithoutDishesInputSchema;
