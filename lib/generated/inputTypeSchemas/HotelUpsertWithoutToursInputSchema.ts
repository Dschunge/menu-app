import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { HotelUpdateWithoutToursInputSchema } from './HotelUpdateWithoutToursInputSchema';
import { HotelUncheckedUpdateWithoutToursInputSchema } from './HotelUncheckedUpdateWithoutToursInputSchema';
import { HotelCreateWithoutToursInputSchema } from './HotelCreateWithoutToursInputSchema';
import { HotelUncheckedCreateWithoutToursInputSchema } from './HotelUncheckedCreateWithoutToursInputSchema';
import { HotelWhereInputSchema } from './HotelWhereInputSchema';

export const HotelUpsertWithoutToursInputSchema: z.ZodType<Prisma.HotelUpsertWithoutToursInput> = z.object({
  update: z.union([ z.lazy(() => HotelUpdateWithoutToursInputSchema),z.lazy(() => HotelUncheckedUpdateWithoutToursInputSchema) ]),
  create: z.union([ z.lazy(() => HotelCreateWithoutToursInputSchema),z.lazy(() => HotelUncheckedCreateWithoutToursInputSchema) ]),
  where: z.lazy(() => HotelWhereInputSchema).optional()
}).strict();

export default HotelUpsertWithoutToursInputSchema;
