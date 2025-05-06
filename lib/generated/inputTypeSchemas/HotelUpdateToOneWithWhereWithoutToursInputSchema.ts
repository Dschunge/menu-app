import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { HotelWhereInputSchema } from './HotelWhereInputSchema';
import { HotelUpdateWithoutToursInputSchema } from './HotelUpdateWithoutToursInputSchema';
import { HotelUncheckedUpdateWithoutToursInputSchema } from './HotelUncheckedUpdateWithoutToursInputSchema';

export const HotelUpdateToOneWithWhereWithoutToursInputSchema: z.ZodType<Prisma.HotelUpdateToOneWithWhereWithoutToursInput> = z.object({
  where: z.lazy(() => HotelWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => HotelUpdateWithoutToursInputSchema),z.lazy(() => HotelUncheckedUpdateWithoutToursInputSchema) ]),
}).strict();

export default HotelUpdateToOneWithWhereWithoutToursInputSchema;
