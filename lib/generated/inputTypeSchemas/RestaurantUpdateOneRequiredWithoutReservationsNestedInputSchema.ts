import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { RestaurantCreateWithoutReservationsInputSchema } from './RestaurantCreateWithoutReservationsInputSchema';
import { RestaurantUncheckedCreateWithoutReservationsInputSchema } from './RestaurantUncheckedCreateWithoutReservationsInputSchema';
import { RestaurantCreateOrConnectWithoutReservationsInputSchema } from './RestaurantCreateOrConnectWithoutReservationsInputSchema';
import { RestaurantUpsertWithoutReservationsInputSchema } from './RestaurantUpsertWithoutReservationsInputSchema';
import { RestaurantWhereUniqueInputSchema } from './RestaurantWhereUniqueInputSchema';
import { RestaurantUpdateToOneWithWhereWithoutReservationsInputSchema } from './RestaurantUpdateToOneWithWhereWithoutReservationsInputSchema';
import { RestaurantUpdateWithoutReservationsInputSchema } from './RestaurantUpdateWithoutReservationsInputSchema';
import { RestaurantUncheckedUpdateWithoutReservationsInputSchema } from './RestaurantUncheckedUpdateWithoutReservationsInputSchema';

export const RestaurantUpdateOneRequiredWithoutReservationsNestedInputSchema: z.ZodType<Prisma.RestaurantUpdateOneRequiredWithoutReservationsNestedInput> = z.object({
  create: z.union([ z.lazy(() => RestaurantCreateWithoutReservationsInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutReservationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RestaurantCreateOrConnectWithoutReservationsInputSchema).optional(),
  upsert: z.lazy(() => RestaurantUpsertWithoutReservationsInputSchema).optional(),
  connect: z.lazy(() => RestaurantWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => RestaurantUpdateToOneWithWhereWithoutReservationsInputSchema),z.lazy(() => RestaurantUpdateWithoutReservationsInputSchema),z.lazy(() => RestaurantUncheckedUpdateWithoutReservationsInputSchema) ]).optional(),
}).strict();

export default RestaurantUpdateOneRequiredWithoutReservationsNestedInputSchema;
