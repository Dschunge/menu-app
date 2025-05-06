import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SubcategoryUpdateWithoutDishesInputSchema } from './SubcategoryUpdateWithoutDishesInputSchema';
import { SubcategoryUncheckedUpdateWithoutDishesInputSchema } from './SubcategoryUncheckedUpdateWithoutDishesInputSchema';
import { SubcategoryCreateWithoutDishesInputSchema } from './SubcategoryCreateWithoutDishesInputSchema';
import { SubcategoryUncheckedCreateWithoutDishesInputSchema } from './SubcategoryUncheckedCreateWithoutDishesInputSchema';
import { SubcategoryWhereInputSchema } from './SubcategoryWhereInputSchema';

export const SubcategoryUpsertWithoutDishesInputSchema: z.ZodType<Prisma.SubcategoryUpsertWithoutDishesInput> = z.object({
  update: z.union([ z.lazy(() => SubcategoryUpdateWithoutDishesInputSchema),z.lazy(() => SubcategoryUncheckedUpdateWithoutDishesInputSchema) ]),
  create: z.union([ z.lazy(() => SubcategoryCreateWithoutDishesInputSchema),z.lazy(() => SubcategoryUncheckedCreateWithoutDishesInputSchema) ]),
  where: z.lazy(() => SubcategoryWhereInputSchema).optional()
}).strict();

export default SubcategoryUpsertWithoutDishesInputSchema;
