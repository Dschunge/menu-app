import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { HotelCreateWithoutToursInputSchema } from './HotelCreateWithoutToursInputSchema';
import { HotelUncheckedCreateWithoutToursInputSchema } from './HotelUncheckedCreateWithoutToursInputSchema';
import { HotelCreateOrConnectWithoutToursInputSchema } from './HotelCreateOrConnectWithoutToursInputSchema';
import { HotelUpsertWithoutToursInputSchema } from './HotelUpsertWithoutToursInputSchema';
import { HotelWhereUniqueInputSchema } from './HotelWhereUniqueInputSchema';
import { HotelUpdateToOneWithWhereWithoutToursInputSchema } from './HotelUpdateToOneWithWhereWithoutToursInputSchema';
import { HotelUpdateWithoutToursInputSchema } from './HotelUpdateWithoutToursInputSchema';
import { HotelUncheckedUpdateWithoutToursInputSchema } from './HotelUncheckedUpdateWithoutToursInputSchema';

export const HotelUpdateOneRequiredWithoutToursNestedInputSchema: z.ZodType<Prisma.HotelUpdateOneRequiredWithoutToursNestedInput> = z.object({
  create: z.union([ z.lazy(() => HotelCreateWithoutToursInputSchema),z.lazy(() => HotelUncheckedCreateWithoutToursInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => HotelCreateOrConnectWithoutToursInputSchema).optional(),
  upsert: z.lazy(() => HotelUpsertWithoutToursInputSchema).optional(),
  connect: z.lazy(() => HotelWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => HotelUpdateToOneWithWhereWithoutToursInputSchema),z.lazy(() => HotelUpdateWithoutToursInputSchema),z.lazy(() => HotelUncheckedUpdateWithoutToursInputSchema) ]).optional(),
}).strict();

export default HotelUpdateOneRequiredWithoutToursNestedInputSchema;
