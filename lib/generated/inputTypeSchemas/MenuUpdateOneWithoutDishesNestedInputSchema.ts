import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { MenuCreateWithoutDishesInputSchema } from './MenuCreateWithoutDishesInputSchema';
import { MenuUncheckedCreateWithoutDishesInputSchema } from './MenuUncheckedCreateWithoutDishesInputSchema';
import { MenuCreateOrConnectWithoutDishesInputSchema } from './MenuCreateOrConnectWithoutDishesInputSchema';
import { MenuUpsertWithoutDishesInputSchema } from './MenuUpsertWithoutDishesInputSchema';
import { MenuWhereInputSchema } from './MenuWhereInputSchema';
import { MenuWhereUniqueInputSchema } from './MenuWhereUniqueInputSchema';
import { MenuUpdateToOneWithWhereWithoutDishesInputSchema } from './MenuUpdateToOneWithWhereWithoutDishesInputSchema';
import { MenuUpdateWithoutDishesInputSchema } from './MenuUpdateWithoutDishesInputSchema';
import { MenuUncheckedUpdateWithoutDishesInputSchema } from './MenuUncheckedUpdateWithoutDishesInputSchema';

export const MenuUpdateOneWithoutDishesNestedInputSchema: z.ZodType<Prisma.MenuUpdateOneWithoutDishesNestedInput> = z.object({
  create: z.union([ z.lazy(() => MenuCreateWithoutDishesInputSchema),z.lazy(() => MenuUncheckedCreateWithoutDishesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MenuCreateOrConnectWithoutDishesInputSchema).optional(),
  upsert: z.lazy(() => MenuUpsertWithoutDishesInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => MenuWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => MenuWhereInputSchema) ]).optional(),
  connect: z.lazy(() => MenuWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MenuUpdateToOneWithWhereWithoutDishesInputSchema),z.lazy(() => MenuUpdateWithoutDishesInputSchema),z.lazy(() => MenuUncheckedUpdateWithoutDishesInputSchema) ]).optional(),
}).strict();

export default MenuUpdateOneWithoutDishesNestedInputSchema;
