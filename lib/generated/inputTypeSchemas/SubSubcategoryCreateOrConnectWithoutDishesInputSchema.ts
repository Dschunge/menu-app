import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SubSubcategoryWhereUniqueInputSchema } from './SubSubcategoryWhereUniqueInputSchema';
import { SubSubcategoryCreateWithoutDishesInputSchema } from './SubSubcategoryCreateWithoutDishesInputSchema';
import { SubSubcategoryUncheckedCreateWithoutDishesInputSchema } from './SubSubcategoryUncheckedCreateWithoutDishesInputSchema';

export const SubSubcategoryCreateOrConnectWithoutDishesInputSchema: z.ZodType<Prisma.SubSubcategoryCreateOrConnectWithoutDishesInput> = z.object({
  where: z.lazy(() => SubSubcategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SubSubcategoryCreateWithoutDishesInputSchema),z.lazy(() => SubSubcategoryUncheckedCreateWithoutDishesInputSchema) ]),
}).strict();

export default SubSubcategoryCreateOrConnectWithoutDishesInputSchema;
