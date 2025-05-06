import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { MenuUpdateWithoutDishesInputSchema } from './MenuUpdateWithoutDishesInputSchema';
import { MenuUncheckedUpdateWithoutDishesInputSchema } from './MenuUncheckedUpdateWithoutDishesInputSchema';
import { MenuCreateWithoutDishesInputSchema } from './MenuCreateWithoutDishesInputSchema';
import { MenuUncheckedCreateWithoutDishesInputSchema } from './MenuUncheckedCreateWithoutDishesInputSchema';
import { MenuWhereInputSchema } from './MenuWhereInputSchema';

export const MenuUpsertWithoutDishesInputSchema: z.ZodType<Prisma.MenuUpsertWithoutDishesInput> = z.object({
  update: z.union([ z.lazy(() => MenuUpdateWithoutDishesInputSchema),z.lazy(() => MenuUncheckedUpdateWithoutDishesInputSchema) ]),
  create: z.union([ z.lazy(() => MenuCreateWithoutDishesInputSchema),z.lazy(() => MenuUncheckedCreateWithoutDishesInputSchema) ]),
  where: z.lazy(() => MenuWhereInputSchema).optional()
}).strict();

export default MenuUpsertWithoutDishesInputSchema;
