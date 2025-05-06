import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { RestaurantCreateWithoutMenusInputSchema } from './RestaurantCreateWithoutMenusInputSchema';
import { RestaurantUncheckedCreateWithoutMenusInputSchema } from './RestaurantUncheckedCreateWithoutMenusInputSchema';
import { RestaurantCreateOrConnectWithoutMenusInputSchema } from './RestaurantCreateOrConnectWithoutMenusInputSchema';
import { RestaurantUpsertWithoutMenusInputSchema } from './RestaurantUpsertWithoutMenusInputSchema';
import { RestaurantWhereUniqueInputSchema } from './RestaurantWhereUniqueInputSchema';
import { RestaurantUpdateToOneWithWhereWithoutMenusInputSchema } from './RestaurantUpdateToOneWithWhereWithoutMenusInputSchema';
import { RestaurantUpdateWithoutMenusInputSchema } from './RestaurantUpdateWithoutMenusInputSchema';
import { RestaurantUncheckedUpdateWithoutMenusInputSchema } from './RestaurantUncheckedUpdateWithoutMenusInputSchema';

export const RestaurantUpdateOneRequiredWithoutMenusNestedInputSchema: z.ZodType<Prisma.RestaurantUpdateOneRequiredWithoutMenusNestedInput> = z.object({
  create: z.union([ z.lazy(() => RestaurantCreateWithoutMenusInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutMenusInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RestaurantCreateOrConnectWithoutMenusInputSchema).optional(),
  upsert: z.lazy(() => RestaurantUpsertWithoutMenusInputSchema).optional(),
  connect: z.lazy(() => RestaurantWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => RestaurantUpdateToOneWithWhereWithoutMenusInputSchema),z.lazy(() => RestaurantUpdateWithoutMenusInputSchema),z.lazy(() => RestaurantUncheckedUpdateWithoutMenusInputSchema) ]).optional(),
}).strict();

export default RestaurantUpdateOneRequiredWithoutMenusNestedInputSchema;
