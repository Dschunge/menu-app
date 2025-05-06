import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SubcategoryCreateWithoutDishesInputSchema } from './SubcategoryCreateWithoutDishesInputSchema';
import { SubcategoryUncheckedCreateWithoutDishesInputSchema } from './SubcategoryUncheckedCreateWithoutDishesInputSchema';
import { SubcategoryCreateOrConnectWithoutDishesInputSchema } from './SubcategoryCreateOrConnectWithoutDishesInputSchema';
import { SubcategoryWhereUniqueInputSchema } from './SubcategoryWhereUniqueInputSchema';

export const SubcategoryCreateNestedOneWithoutDishesInputSchema: z.ZodType<Prisma.SubcategoryCreateNestedOneWithoutDishesInput> = z.object({
  create: z.union([ z.lazy(() => SubcategoryCreateWithoutDishesInputSchema),z.lazy(() => SubcategoryUncheckedCreateWithoutDishesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SubcategoryCreateOrConnectWithoutDishesInputSchema).optional(),
  connect: z.lazy(() => SubcategoryWhereUniqueInputSchema).optional()
}).strict();

export default SubcategoryCreateNestedOneWithoutDishesInputSchema;
