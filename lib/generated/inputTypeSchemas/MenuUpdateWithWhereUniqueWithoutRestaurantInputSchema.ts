import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { MenuWhereUniqueInputSchema } from './MenuWhereUniqueInputSchema';
import { MenuUpdateWithoutRestaurantInputSchema } from './MenuUpdateWithoutRestaurantInputSchema';
import { MenuUncheckedUpdateWithoutRestaurantInputSchema } from './MenuUncheckedUpdateWithoutRestaurantInputSchema';

export const MenuUpdateWithWhereUniqueWithoutRestaurantInputSchema: z.ZodType<Prisma.MenuUpdateWithWhereUniqueWithoutRestaurantInput> = z.object({
  where: z.lazy(() => MenuWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => MenuUpdateWithoutRestaurantInputSchema),z.lazy(() => MenuUncheckedUpdateWithoutRestaurantInputSchema) ]),
}).strict();

export default MenuUpdateWithWhereUniqueWithoutRestaurantInputSchema;
