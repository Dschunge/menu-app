import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SubSubcategoryWhereInputSchema } from './SubSubcategoryWhereInputSchema';
import { SubSubcategoryUpdateWithoutDishesInputSchema } from './SubSubcategoryUpdateWithoutDishesInputSchema';
import { SubSubcategoryUncheckedUpdateWithoutDishesInputSchema } from './SubSubcategoryUncheckedUpdateWithoutDishesInputSchema';

export const SubSubcategoryUpdateToOneWithWhereWithoutDishesInputSchema: z.ZodType<Prisma.SubSubcategoryUpdateToOneWithWhereWithoutDishesInput> = z.object({
  where: z.lazy(() => SubSubcategoryWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => SubSubcategoryUpdateWithoutDishesInputSchema),z.lazy(() => SubSubcategoryUncheckedUpdateWithoutDishesInputSchema) ]),
}).strict();

export default SubSubcategoryUpdateToOneWithWhereWithoutDishesInputSchema;
