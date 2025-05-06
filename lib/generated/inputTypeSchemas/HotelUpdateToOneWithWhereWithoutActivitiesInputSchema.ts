import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { HotelWhereInputSchema } from './HotelWhereInputSchema';
import { HotelUpdateWithoutActivitiesInputSchema } from './HotelUpdateWithoutActivitiesInputSchema';
import { HotelUncheckedUpdateWithoutActivitiesInputSchema } from './HotelUncheckedUpdateWithoutActivitiesInputSchema';

export const HotelUpdateToOneWithWhereWithoutActivitiesInputSchema: z.ZodType<Prisma.HotelUpdateToOneWithWhereWithoutActivitiesInput> = z.object({
  where: z.lazy(() => HotelWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => HotelUpdateWithoutActivitiesInputSchema),z.lazy(() => HotelUncheckedUpdateWithoutActivitiesInputSchema) ]),
}).strict();

export default HotelUpdateToOneWithWhereWithoutActivitiesInputSchema;
