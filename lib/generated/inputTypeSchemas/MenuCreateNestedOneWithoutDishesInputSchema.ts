import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { MenuCreateWithoutDishesInputSchema } from './MenuCreateWithoutDishesInputSchema';
import { MenuUncheckedCreateWithoutDishesInputSchema } from './MenuUncheckedCreateWithoutDishesInputSchema';
import { MenuCreateOrConnectWithoutDishesInputSchema } from './MenuCreateOrConnectWithoutDishesInputSchema';
import { MenuWhereUniqueInputSchema } from './MenuWhereUniqueInputSchema';

export const MenuCreateNestedOneWithoutDishesInputSchema: z.ZodType<Prisma.MenuCreateNestedOneWithoutDishesInput> = z.object({
  create: z.union([ z.lazy(() => MenuCreateWithoutDishesInputSchema),z.lazy(() => MenuUncheckedCreateWithoutDishesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MenuCreateOrConnectWithoutDishesInputSchema).optional(),
  connect: z.lazy(() => MenuWhereUniqueInputSchema).optional()
}).strict();

export default MenuCreateNestedOneWithoutDishesInputSchema;
