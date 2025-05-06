import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SubSubcategoryCreateWithoutDishesInputSchema } from './SubSubcategoryCreateWithoutDishesInputSchema';
import { SubSubcategoryUncheckedCreateWithoutDishesInputSchema } from './SubSubcategoryUncheckedCreateWithoutDishesInputSchema';
import { SubSubcategoryCreateOrConnectWithoutDishesInputSchema } from './SubSubcategoryCreateOrConnectWithoutDishesInputSchema';
import { SubSubcategoryWhereUniqueInputSchema } from './SubSubcategoryWhereUniqueInputSchema';

export const SubSubcategoryCreateNestedOneWithoutDishesInputSchema: z.ZodType<Prisma.SubSubcategoryCreateNestedOneWithoutDishesInput> = z.object({
  create: z.union([ z.lazy(() => SubSubcategoryCreateWithoutDishesInputSchema),z.lazy(() => SubSubcategoryUncheckedCreateWithoutDishesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SubSubcategoryCreateOrConnectWithoutDishesInputSchema).optional(),
  connect: z.lazy(() => SubSubcategoryWhereUniqueInputSchema).optional()
}).strict();

export default SubSubcategoryCreateNestedOneWithoutDishesInputSchema;
