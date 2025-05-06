import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { MenuWhereUniqueInputSchema } from './MenuWhereUniqueInputSchema';
import { MenuCreateWithoutDishesInputSchema } from './MenuCreateWithoutDishesInputSchema';
import { MenuUncheckedCreateWithoutDishesInputSchema } from './MenuUncheckedCreateWithoutDishesInputSchema';

export const MenuCreateOrConnectWithoutDishesInputSchema: z.ZodType<Prisma.MenuCreateOrConnectWithoutDishesInput> = z.object({
  where: z.lazy(() => MenuWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MenuCreateWithoutDishesInputSchema),z.lazy(() => MenuUncheckedCreateWithoutDishesInputSchema) ]),
}).strict();

export default MenuCreateOrConnectWithoutDishesInputSchema;
