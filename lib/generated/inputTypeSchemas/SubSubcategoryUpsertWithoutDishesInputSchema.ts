import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SubSubcategoryUpdateWithoutDishesInputSchema } from './SubSubcategoryUpdateWithoutDishesInputSchema';
import { SubSubcategoryUncheckedUpdateWithoutDishesInputSchema } from './SubSubcategoryUncheckedUpdateWithoutDishesInputSchema';
import { SubSubcategoryCreateWithoutDishesInputSchema } from './SubSubcategoryCreateWithoutDishesInputSchema';
import { SubSubcategoryUncheckedCreateWithoutDishesInputSchema } from './SubSubcategoryUncheckedCreateWithoutDishesInputSchema';
import { SubSubcategoryWhereInputSchema } from './SubSubcategoryWhereInputSchema';

export const SubSubcategoryUpsertWithoutDishesInputSchema: z.ZodType<Prisma.SubSubcategoryUpsertWithoutDishesInput> = z.object({
  update: z.union([ z.lazy(() => SubSubcategoryUpdateWithoutDishesInputSchema),z.lazy(() => SubSubcategoryUncheckedUpdateWithoutDishesInputSchema) ]),
  create: z.union([ z.lazy(() => SubSubcategoryCreateWithoutDishesInputSchema),z.lazy(() => SubSubcategoryUncheckedCreateWithoutDishesInputSchema) ]),
  where: z.lazy(() => SubSubcategoryWhereInputSchema).optional()
}).strict();

export default SubSubcategoryUpsertWithoutDishesInputSchema;
