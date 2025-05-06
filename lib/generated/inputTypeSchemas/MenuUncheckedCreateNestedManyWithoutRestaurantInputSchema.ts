import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { MenuCreateWithoutRestaurantInputSchema } from './MenuCreateWithoutRestaurantInputSchema';
import { MenuUncheckedCreateWithoutRestaurantInputSchema } from './MenuUncheckedCreateWithoutRestaurantInputSchema';
import { MenuCreateOrConnectWithoutRestaurantInputSchema } from './MenuCreateOrConnectWithoutRestaurantInputSchema';
import { MenuCreateManyRestaurantInputEnvelopeSchema } from './MenuCreateManyRestaurantInputEnvelopeSchema';
import { MenuWhereUniqueInputSchema } from './MenuWhereUniqueInputSchema';

export const MenuUncheckedCreateNestedManyWithoutRestaurantInputSchema: z.ZodType<Prisma.MenuUncheckedCreateNestedManyWithoutRestaurantInput> = z.object({
  create: z.union([ z.lazy(() => MenuCreateWithoutRestaurantInputSchema),z.lazy(() => MenuCreateWithoutRestaurantInputSchema).array(),z.lazy(() => MenuUncheckedCreateWithoutRestaurantInputSchema),z.lazy(() => MenuUncheckedCreateWithoutRestaurantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MenuCreateOrConnectWithoutRestaurantInputSchema),z.lazy(() => MenuCreateOrConnectWithoutRestaurantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MenuCreateManyRestaurantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MenuWhereUniqueInputSchema),z.lazy(() => MenuWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default MenuUncheckedCreateNestedManyWithoutRestaurantInputSchema;
