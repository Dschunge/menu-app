import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { MenuWhereInputSchema } from './MenuWhereInputSchema';
import { MenuUpdateWithoutDishesInputSchema } from './MenuUpdateWithoutDishesInputSchema';
import { MenuUncheckedUpdateWithoutDishesInputSchema } from './MenuUncheckedUpdateWithoutDishesInputSchema';

export const MenuUpdateToOneWithWhereWithoutDishesInputSchema: z.ZodType<Prisma.MenuUpdateToOneWithWhereWithoutDishesInput> = z.object({
  where: z.lazy(() => MenuWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MenuUpdateWithoutDishesInputSchema),z.lazy(() => MenuUncheckedUpdateWithoutDishesInputSchema) ]),
}).strict();

export default MenuUpdateToOneWithWhereWithoutDishesInputSchema;
