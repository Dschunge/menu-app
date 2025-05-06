import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SubcategoryCreateWithoutDishesInputSchema } from './SubcategoryCreateWithoutDishesInputSchema';
import { SubcategoryUncheckedCreateWithoutDishesInputSchema } from './SubcategoryUncheckedCreateWithoutDishesInputSchema';
import { SubcategoryCreateOrConnectWithoutDishesInputSchema } from './SubcategoryCreateOrConnectWithoutDishesInputSchema';
import { SubcategoryUpsertWithoutDishesInputSchema } from './SubcategoryUpsertWithoutDishesInputSchema';
import { SubcategoryWhereInputSchema } from './SubcategoryWhereInputSchema';
import { SubcategoryWhereUniqueInputSchema } from './SubcategoryWhereUniqueInputSchema';
import { SubcategoryUpdateToOneWithWhereWithoutDishesInputSchema } from './SubcategoryUpdateToOneWithWhereWithoutDishesInputSchema';
import { SubcategoryUpdateWithoutDishesInputSchema } from './SubcategoryUpdateWithoutDishesInputSchema';
import { SubcategoryUncheckedUpdateWithoutDishesInputSchema } from './SubcategoryUncheckedUpdateWithoutDishesInputSchema';

export const SubcategoryUpdateOneWithoutDishesNestedInputSchema: z.ZodType<Prisma.SubcategoryUpdateOneWithoutDishesNestedInput> = z.object({
  create: z.union([ z.lazy(() => SubcategoryCreateWithoutDishesInputSchema),z.lazy(() => SubcategoryUncheckedCreateWithoutDishesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SubcategoryCreateOrConnectWithoutDishesInputSchema).optional(),
  upsert: z.lazy(() => SubcategoryUpsertWithoutDishesInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => SubcategoryWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => SubcategoryWhereInputSchema) ]).optional(),
  connect: z.lazy(() => SubcategoryWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SubcategoryUpdateToOneWithWhereWithoutDishesInputSchema),z.lazy(() => SubcategoryUpdateWithoutDishesInputSchema),z.lazy(() => SubcategoryUncheckedUpdateWithoutDishesInputSchema) ]).optional(),
}).strict();

export default SubcategoryUpdateOneWithoutDishesNestedInputSchema;
