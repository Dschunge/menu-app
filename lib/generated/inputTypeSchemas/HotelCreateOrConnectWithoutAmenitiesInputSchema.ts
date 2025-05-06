import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { HotelWhereUniqueInputSchema } from './HotelWhereUniqueInputSchema';
import { HotelCreateWithoutAmenitiesInputSchema } from './HotelCreateWithoutAmenitiesInputSchema';
import { HotelUncheckedCreateWithoutAmenitiesInputSchema } from './HotelUncheckedCreateWithoutAmenitiesInputSchema';

export const HotelCreateOrConnectWithoutAmenitiesInputSchema: z.ZodType<Prisma.HotelCreateOrConnectWithoutAmenitiesInput> = z.object({
  where: z.lazy(() => HotelWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => HotelCreateWithoutAmenitiesInputSchema),z.lazy(() => HotelUncheckedCreateWithoutAmenitiesInputSchema) ]),
}).strict();

export default HotelCreateOrConnectWithoutAmenitiesInputSchema;
