import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { RestaurantCreateWithoutTablesInputSchema } from './RestaurantCreateWithoutTablesInputSchema';
import { RestaurantUncheckedCreateWithoutTablesInputSchema } from './RestaurantUncheckedCreateWithoutTablesInputSchema';
import { RestaurantCreateOrConnectWithoutTablesInputSchema } from './RestaurantCreateOrConnectWithoutTablesInputSchema';
import { RestaurantUpsertWithoutTablesInputSchema } from './RestaurantUpsertWithoutTablesInputSchema';
import { RestaurantWhereUniqueInputSchema } from './RestaurantWhereUniqueInputSchema';
import { RestaurantUpdateToOneWithWhereWithoutTablesInputSchema } from './RestaurantUpdateToOneWithWhereWithoutTablesInputSchema';
import { RestaurantUpdateWithoutTablesInputSchema } from './RestaurantUpdateWithoutTablesInputSchema';
import { RestaurantUncheckedUpdateWithoutTablesInputSchema } from './RestaurantUncheckedUpdateWithoutTablesInputSchema';

export const RestaurantUpdateOneRequiredWithoutTablesNestedInputSchema: z.ZodType<Prisma.RestaurantUpdateOneRequiredWithoutTablesNestedInput> = z.object({
  create: z.union([ z.lazy(() => RestaurantCreateWithoutTablesInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutTablesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RestaurantCreateOrConnectWithoutTablesInputSchema).optional(),
  upsert: z.lazy(() => RestaurantUpsertWithoutTablesInputSchema).optional(),
  connect: z.lazy(() => RestaurantWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => RestaurantUpdateToOneWithWhereWithoutTablesInputSchema),z.lazy(() => RestaurantUpdateWithoutTablesInputSchema),z.lazy(() => RestaurantUncheckedUpdateWithoutTablesInputSchema) ]).optional(),
}).strict();

export default RestaurantUpdateOneRequiredWithoutTablesNestedInputSchema;
