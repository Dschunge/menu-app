import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SubcategoryWhereInputSchema } from './SubcategoryWhereInputSchema';
import { SubcategoryUpdateWithoutDishesInputSchema } from './SubcategoryUpdateWithoutDishesInputSchema';
import { SubcategoryUncheckedUpdateWithoutDishesInputSchema } from './SubcategoryUncheckedUpdateWithoutDishesInputSchema';

export const SubcategoryUpdateToOneWithWhereWithoutDishesInputSchema: z.ZodType<Prisma.SubcategoryUpdateToOneWithWhereWithoutDishesInput> = z.object({
  where: z.lazy(() => SubcategoryWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => SubcategoryUpdateWithoutDishesInputSchema),z.lazy(() => SubcategoryUncheckedUpdateWithoutDishesInputSchema) ]),
}).strict();

export default SubcategoryUpdateToOneWithWhereWithoutDishesInputSchema;
