import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { HotelUpdateWithoutActivitiesInputSchema } from './HotelUpdateWithoutActivitiesInputSchema';
import { HotelUncheckedUpdateWithoutActivitiesInputSchema } from './HotelUncheckedUpdateWithoutActivitiesInputSchema';
import { HotelCreateWithoutActivitiesInputSchema } from './HotelCreateWithoutActivitiesInputSchema';
import { HotelUncheckedCreateWithoutActivitiesInputSchema } from './HotelUncheckedCreateWithoutActivitiesInputSchema';
import { HotelWhereInputSchema } from './HotelWhereInputSchema';

export const HotelUpsertWithoutActivitiesInputSchema: z.ZodType<Prisma.HotelUpsertWithoutActivitiesInput> = z.object({
  update: z.union([ z.lazy(() => HotelUpdateWithoutActivitiesInputSchema),z.lazy(() => HotelUncheckedUpdateWithoutActivitiesInputSchema) ]),
  create: z.union([ z.lazy(() => HotelCreateWithoutActivitiesInputSchema),z.lazy(() => HotelUncheckedCreateWithoutActivitiesInputSchema) ]),
  where: z.lazy(() => HotelWhereInputSchema).optional()
}).strict();

export default HotelUpsertWithoutActivitiesInputSchema;
