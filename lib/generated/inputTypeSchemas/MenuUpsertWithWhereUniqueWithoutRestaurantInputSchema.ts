import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { MenuWhereUniqueInputSchema } from './MenuWhereUniqueInputSchema';
import { MenuUpdateWithoutRestaurantInputSchema } from './MenuUpdateWithoutRestaurantInputSchema';
import { MenuUncheckedUpdateWithoutRestaurantInputSchema } from './MenuUncheckedUpdateWithoutRestaurantInputSchema';
import { MenuCreateWithoutRestaurantInputSchema } from './MenuCreateWithoutRestaurantInputSchema';
import { MenuUncheckedCreateWithoutRestaurantInputSchema } from './MenuUncheckedCreateWithoutRestaurantInputSchema';

export const MenuUpsertWithWhereUniqueWithoutRestaurantInputSchema: z.ZodType<Prisma.MenuUpsertWithWhereUniqueWithoutRestaurantInput> = z.object({
  where: z.lazy(() => MenuWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => MenuUpdateWithoutRestaurantInputSchema),z.lazy(() => MenuUncheckedUpdateWithoutRestaurantInputSchema) ]),
  create: z.union([ z.lazy(() => MenuCreateWithoutRestaurantInputSchema),z.lazy(() => MenuUncheckedCreateWithoutRestaurantInputSchema) ]),
}).strict();

export default MenuUpsertWithWhereUniqueWithoutRestaurantInputSchema;
