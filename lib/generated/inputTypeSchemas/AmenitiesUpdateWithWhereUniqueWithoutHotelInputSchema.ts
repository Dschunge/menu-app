import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { AmenitiesWhereUniqueInputSchema } from './AmenitiesWhereUniqueInputSchema';
import { AmenitiesUpdateWithoutHotelInputSchema } from './AmenitiesUpdateWithoutHotelInputSchema';
import { AmenitiesUncheckedUpdateWithoutHotelInputSchema } from './AmenitiesUncheckedUpdateWithoutHotelInputSchema';

export const AmenitiesUpdateWithWhereUniqueWithoutHotelInputSchema: z.ZodType<Prisma.AmenitiesUpdateWithWhereUniqueWithoutHotelInput> = z.object({
  where: z.lazy(() => AmenitiesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AmenitiesUpdateWithoutHotelInputSchema),z.lazy(() => AmenitiesUncheckedUpdateWithoutHotelInputSchema) ]),
}).strict();

export default AmenitiesUpdateWithWhereUniqueWithoutHotelInputSchema;
