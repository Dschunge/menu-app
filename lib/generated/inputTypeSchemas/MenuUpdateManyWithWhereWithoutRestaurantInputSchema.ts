import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { MenuScalarWhereInputSchema } from './MenuScalarWhereInputSchema';
import { MenuUpdateManyMutationInputSchema } from './MenuUpdateManyMutationInputSchema';
import { MenuUncheckedUpdateManyWithoutRestaurantInputSchema } from './MenuUncheckedUpdateManyWithoutRestaurantInputSchema';

export const MenuUpdateManyWithWhereWithoutRestaurantInputSchema: z.ZodType<Prisma.MenuUpdateManyWithWhereWithoutRestaurantInput> = z.object({
  where: z.lazy(() => MenuScalarWhereInputSchema),
  data: z.union([ z.lazy(() => MenuUpdateManyMutationInputSchema),z.lazy(() => MenuUncheckedUpdateManyWithoutRestaurantInputSchema) ]),
}).strict();

export default MenuUpdateManyWithWhereWithoutRestaurantInputSchema;
