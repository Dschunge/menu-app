import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { MenuCreateWithoutRestaurantInputSchema } from './MenuCreateWithoutRestaurantInputSchema';
import { MenuUncheckedCreateWithoutRestaurantInputSchema } from './MenuUncheckedCreateWithoutRestaurantInputSchema';
import { MenuCreateOrConnectWithoutRestaurantInputSchema } from './MenuCreateOrConnectWithoutRestaurantInputSchema';
import { MenuUpsertWithWhereUniqueWithoutRestaurantInputSchema } from './MenuUpsertWithWhereUniqueWithoutRestaurantInputSchema';
import { MenuCreateManyRestaurantInputEnvelopeSchema } from './MenuCreateManyRestaurantInputEnvelopeSchema';
import { MenuWhereUniqueInputSchema } from './MenuWhereUniqueInputSchema';
import { MenuUpdateWithWhereUniqueWithoutRestaurantInputSchema } from './MenuUpdateWithWhereUniqueWithoutRestaurantInputSchema';
import { MenuUpdateManyWithWhereWithoutRestaurantInputSchema } from './MenuUpdateManyWithWhereWithoutRestaurantInputSchema';
import { MenuScalarWhereInputSchema } from './MenuScalarWhereInputSchema';

export const MenuUncheckedUpdateManyWithoutRestaurantNestedInputSchema: z.ZodType<Prisma.MenuUncheckedUpdateManyWithoutRestaurantNestedInput> = z.object({
  create: z.union([ z.lazy(() => MenuCreateWithoutRestaurantInputSchema),z.lazy(() => MenuCreateWithoutRestaurantInputSchema).array(),z.lazy(() => MenuUncheckedCreateWithoutRestaurantInputSchema),z.lazy(() => MenuUncheckedCreateWithoutRestaurantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MenuCreateOrConnectWithoutRestaurantInputSchema),z.lazy(() => MenuCreateOrConnectWithoutRestaurantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MenuUpsertWithWhereUniqueWithoutRestaurantInputSchema),z.lazy(() => MenuUpsertWithWhereUniqueWithoutRestaurantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MenuCreateManyRestaurantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MenuWhereUniqueInputSchema),z.lazy(() => MenuWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MenuWhereUniqueInputSchema),z.lazy(() => MenuWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MenuWhereUniqueInputSchema),z.lazy(() => MenuWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MenuWhereUniqueInputSchema),z.lazy(() => MenuWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MenuUpdateWithWhereUniqueWithoutRestaurantInputSchema),z.lazy(() => MenuUpdateWithWhereUniqueWithoutRestaurantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MenuUpdateManyWithWhereWithoutRestaurantInputSchema),z.lazy(() => MenuUpdateManyWithWhereWithoutRestaurantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MenuScalarWhereInputSchema),z.lazy(() => MenuScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default MenuUncheckedUpdateManyWithoutRestaurantNestedInputSchema;
