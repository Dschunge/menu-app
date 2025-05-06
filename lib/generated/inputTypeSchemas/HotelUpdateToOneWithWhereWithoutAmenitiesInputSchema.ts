import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { HotelWhereInputSchema } from './HotelWhereInputSchema';
import { HotelUpdateWithoutAmenitiesInputSchema } from './HotelUpdateWithoutAmenitiesInputSchema';
import { HotelUncheckedUpdateWithoutAmenitiesInputSchema } from './HotelUncheckedUpdateWithoutAmenitiesInputSchema';

export const HotelUpdateToOneWithWhereWithoutAmenitiesInputSchema: z.ZodType<Prisma.HotelUpdateToOneWithWhereWithoutAmenitiesInput> = z.object({
  where: z.lazy(() => HotelWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => HotelUpdateWithoutAmenitiesInputSchema),z.lazy(() => HotelUncheckedUpdateWithoutAmenitiesInputSchema) ]),
}).strict();

export default HotelUpdateToOneWithWhereWithoutAmenitiesInputSchema;
