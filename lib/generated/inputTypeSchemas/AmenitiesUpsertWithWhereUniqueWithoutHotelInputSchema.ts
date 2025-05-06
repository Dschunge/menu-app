import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { AmenitiesWhereUniqueInputSchema } from './AmenitiesWhereUniqueInputSchema';
import { AmenitiesUpdateWithoutHotelInputSchema } from './AmenitiesUpdateWithoutHotelInputSchema';
import { AmenitiesUncheckedUpdateWithoutHotelInputSchema } from './AmenitiesUncheckedUpdateWithoutHotelInputSchema';
import { AmenitiesCreateWithoutHotelInputSchema } from './AmenitiesCreateWithoutHotelInputSchema';
import { AmenitiesUncheckedCreateWithoutHotelInputSchema } from './AmenitiesUncheckedCreateWithoutHotelInputSchema';

export const AmenitiesUpsertWithWhereUniqueWithoutHotelInputSchema: z.ZodType<Prisma.AmenitiesUpsertWithWhereUniqueWithoutHotelInput> = z.object({
  where: z.lazy(() => AmenitiesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AmenitiesUpdateWithoutHotelInputSchema),z.lazy(() => AmenitiesUncheckedUpdateWithoutHotelInputSchema) ]),
  create: z.union([ z.lazy(() => AmenitiesCreateWithoutHotelInputSchema),z.lazy(() => AmenitiesUncheckedCreateWithoutHotelInputSchema) ]),
}).strict();

export default AmenitiesUpsertWithWhereUniqueWithoutHotelInputSchema;
