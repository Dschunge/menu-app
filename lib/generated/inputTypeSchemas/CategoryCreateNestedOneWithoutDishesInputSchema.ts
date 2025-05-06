import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { CategoryCreateWithoutDishesInputSchema } from './CategoryCreateWithoutDishesInputSchema';
import { CategoryUncheckedCreateWithoutDishesInputSchema } from './CategoryUncheckedCreateWithoutDishesInputSchema';
import { CategoryCreateOrConnectWithoutDishesInputSchema } from './CategoryCreateOrConnectWithoutDishesInputSchema';
import { CategoryWhereUniqueInputSchema } from './CategoryWhereUniqueInputSchema';

export const CategoryCreateNestedOneWithoutDishesInputSchema: z.ZodType<Prisma.CategoryCreateNestedOneWithoutDishesInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutDishesInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutDishesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CategoryCreateOrConnectWithoutDishesInputSchema).optional(),
  connect: z.lazy(() => CategoryWhereUniqueInputSchema).optional()
}).strict();

export default CategoryCreateNestedOneWithoutDishesInputSchema;
