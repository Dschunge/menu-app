import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { MenuWhereUniqueInputSchema } from './MenuWhereUniqueInputSchema';
import { MenuCreateWithoutRestaurantInputSchema } from './MenuCreateWithoutRestaurantInputSchema';
import { MenuUncheckedCreateWithoutRestaurantInputSchema } from './MenuUncheckedCreateWithoutRestaurantInputSchema';

export const MenuCreateOrConnectWithoutRestaurantInputSchema: z.ZodType<Prisma.MenuCreateOrConnectWithoutRestaurantInput> = z.object({
  where: z.lazy(() => MenuWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MenuCreateWithoutRestaurantInputSchema),z.lazy(() => MenuUncheckedCreateWithoutRestaurantInputSchema) ]),
}).strict();

export default MenuCreateOrConnectWithoutRestaurantInputSchema;
