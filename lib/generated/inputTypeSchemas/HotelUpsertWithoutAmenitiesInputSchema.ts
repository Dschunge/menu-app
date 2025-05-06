import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { HotelUpdateWithoutAmenitiesInputSchema } from './HotelUpdateWithoutAmenitiesInputSchema';
import { HotelUncheckedUpdateWithoutAmenitiesInputSchema } from './HotelUncheckedUpdateWithoutAmenitiesInputSchema';
import { HotelCreateWithoutAmenitiesInputSchema } from './HotelCreateWithoutAmenitiesInputSchema';
import { HotelUncheckedCreateWithoutAmenitiesInputSchema } from './HotelUncheckedCreateWithoutAmenitiesInputSchema';
import { HotelWhereInputSchema } from './HotelWhereInputSchema';

export const HotelUpsertWithoutAmenitiesInputSchema: z.ZodType<Prisma.HotelUpsertWithoutAmenitiesInput> = z.object({
  update: z.union([ z.lazy(() => HotelUpdateWithoutAmenitiesInputSchema),z.lazy(() => HotelUncheckedUpdateWithoutAmenitiesInputSchema) ]),
  create: z.union([ z.lazy(() => HotelCreateWithoutAmenitiesInputSchema),z.lazy(() => HotelUncheckedCreateWithoutAmenitiesInputSchema) ]),
  where: z.lazy(() => HotelWhereInputSchema).optional()
}).strict();

export default HotelUpsertWithoutAmenitiesInputSchema;
