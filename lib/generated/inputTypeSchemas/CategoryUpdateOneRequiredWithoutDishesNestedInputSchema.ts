import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { CategoryCreateWithoutDishesInputSchema } from './CategoryCreateWithoutDishesInputSchema';
import { CategoryUncheckedCreateWithoutDishesInputSchema } from './CategoryUncheckedCreateWithoutDishesInputSchema';
import { CategoryCreateOrConnectWithoutDishesInputSchema } from './CategoryCreateOrConnectWithoutDishesInputSchema';
import { CategoryUpsertWithoutDishesInputSchema } from './CategoryUpsertWithoutDishesInputSchema';
import { CategoryWhereUniqueInputSchema } from './CategoryWhereUniqueInputSchema';
import { CategoryUpdateToOneWithWhereWithoutDishesInputSchema } from './CategoryUpdateToOneWithWhereWithoutDishesInputSchema';
import { CategoryUpdateWithoutDishesInputSchema } from './CategoryUpdateWithoutDishesInputSchema';
import { CategoryUncheckedUpdateWithoutDishesInputSchema } from './CategoryUncheckedUpdateWithoutDishesInputSchema';

export const CategoryUpdateOneRequiredWithoutDishesNestedInputSchema: z.ZodType<Prisma.CategoryUpdateOneRequiredWithoutDishesNestedInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutDishesInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutDishesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CategoryCreateOrConnectWithoutDishesInputSchema).optional(),
  upsert: z.lazy(() => CategoryUpsertWithoutDishesInputSchema).optional(),
  connect: z.lazy(() => CategoryWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CategoryUpdateToOneWithWhereWithoutDishesInputSchema),z.lazy(() => CategoryUpdateWithoutDishesInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutDishesInputSchema) ]).optional(),
}).strict();

export default CategoryUpdateOneRequiredWithoutDishesNestedInputSchema;
