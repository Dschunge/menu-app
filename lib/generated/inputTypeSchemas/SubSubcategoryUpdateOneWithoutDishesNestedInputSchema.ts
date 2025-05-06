import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SubSubcategoryCreateWithoutDishesInputSchema } from './SubSubcategoryCreateWithoutDishesInputSchema';
import { SubSubcategoryUncheckedCreateWithoutDishesInputSchema } from './SubSubcategoryUncheckedCreateWithoutDishesInputSchema';
import { SubSubcategoryCreateOrConnectWithoutDishesInputSchema } from './SubSubcategoryCreateOrConnectWithoutDishesInputSchema';
import { SubSubcategoryUpsertWithoutDishesInputSchema } from './SubSubcategoryUpsertWithoutDishesInputSchema';
import { SubSubcategoryWhereInputSchema } from './SubSubcategoryWhereInputSchema';
import { SubSubcategoryWhereUniqueInputSchema } from './SubSubcategoryWhereUniqueInputSchema';
import { SubSubcategoryUpdateToOneWithWhereWithoutDishesInputSchema } from './SubSubcategoryUpdateToOneWithWhereWithoutDishesInputSchema';
import { SubSubcategoryUpdateWithoutDishesInputSchema } from './SubSubcategoryUpdateWithoutDishesInputSchema';
import { SubSubcategoryUncheckedUpdateWithoutDishesInputSchema } from './SubSubcategoryUncheckedUpdateWithoutDishesInputSchema';

export const SubSubcategoryUpdateOneWithoutDishesNestedInputSchema: z.ZodType<Prisma.SubSubcategoryUpdateOneWithoutDishesNestedInput> = z.object({
  create: z.union([ z.lazy(() => SubSubcategoryCreateWithoutDishesInputSchema),z.lazy(() => SubSubcategoryUncheckedCreateWithoutDishesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SubSubcategoryCreateOrConnectWithoutDishesInputSchema).optional(),
  upsert: z.lazy(() => SubSubcategoryUpsertWithoutDishesInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => SubSubcategoryWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => SubSubcategoryWhereInputSchema) ]).optional(),
  connect: z.lazy(() => SubSubcategoryWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SubSubcategoryUpdateToOneWithWhereWithoutDishesInputSchema),z.lazy(() => SubSubcategoryUpdateWithoutDishesInputSchema),z.lazy(() => SubSubcategoryUncheckedUpdateWithoutDishesInputSchema) ]).optional(),
}).strict();

export default SubSubcategoryUpdateOneWithoutDishesNestedInputSchema;
