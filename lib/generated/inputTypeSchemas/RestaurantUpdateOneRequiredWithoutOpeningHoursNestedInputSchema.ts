import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { RestaurantCreateWithoutOpeningHoursInputSchema } from './RestaurantCreateWithoutOpeningHoursInputSchema';
import { RestaurantUncheckedCreateWithoutOpeningHoursInputSchema } from './RestaurantUncheckedCreateWithoutOpeningHoursInputSchema';
import { RestaurantCreateOrConnectWithoutOpeningHoursInputSchema } from './RestaurantCreateOrConnectWithoutOpeningHoursInputSchema';
import { RestaurantUpsertWithoutOpeningHoursInputSchema } from './RestaurantUpsertWithoutOpeningHoursInputSchema';
import { RestaurantWhereUniqueInputSchema } from './RestaurantWhereUniqueInputSchema';
import { RestaurantUpdateToOneWithWhereWithoutOpeningHoursInputSchema } from './RestaurantUpdateToOneWithWhereWithoutOpeningHoursInputSchema';
import { RestaurantUpdateWithoutOpeningHoursInputSchema } from './RestaurantUpdateWithoutOpeningHoursInputSchema';
import { RestaurantUncheckedUpdateWithoutOpeningHoursInputSchema } from './RestaurantUncheckedUpdateWithoutOpeningHoursInputSchema';

export const RestaurantUpdateOneRequiredWithoutOpeningHoursNestedInputSchema: z.ZodType<Prisma.RestaurantUpdateOneRequiredWithoutOpeningHoursNestedInput> = z.object({
  create: z.union([ z.lazy(() => RestaurantCreateWithoutOpeningHoursInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutOpeningHoursInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RestaurantCreateOrConnectWithoutOpeningHoursInputSchema).optional(),
  upsert: z.lazy(() => RestaurantUpsertWithoutOpeningHoursInputSchema).optional(),
  connect: z.lazy(() => RestaurantWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => RestaurantUpdateToOneWithWhereWithoutOpeningHoursInputSchema),z.lazy(() => RestaurantUpdateWithoutOpeningHoursInputSchema),z.lazy(() => RestaurantUncheckedUpdateWithoutOpeningHoursInputSchema) ]).optional(),
}).strict();

export default RestaurantUpdateOneRequiredWithoutOpeningHoursNestedInputSchema;
