import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SubcategoryWhereUniqueInputSchema } from './SubcategoryWhereUniqueInputSchema';
import { SubcategoryCreateWithoutDishesInputSchema } from './SubcategoryCreateWithoutDishesInputSchema';
import { SubcategoryUncheckedCreateWithoutDishesInputSchema } from './SubcategoryUncheckedCreateWithoutDishesInputSchema';

export const SubcategoryCreateOrConnectWithoutDishesInputSchema: z.ZodType<Prisma.SubcategoryCreateOrConnectWithoutDishesInput> = z.object({
  where: z.lazy(() => SubcategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SubcategoryCreateWithoutDishesInputSchema),z.lazy(() => SubcategoryUncheckedCreateWithoutDishesInputSchema) ]),
}).strict();

export default SubcategoryCreateOrConnectWithoutDishesInputSchema;
