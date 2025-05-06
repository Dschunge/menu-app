import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { AmenitiesWhereUniqueInputSchema } from './AmenitiesWhereUniqueInputSchema';
import { AmenitiesCreateWithoutHotelInputSchema } from './AmenitiesCreateWithoutHotelInputSchema';
import { AmenitiesUncheckedCreateWithoutHotelInputSchema } from './AmenitiesUncheckedCreateWithoutHotelInputSchema';

export const AmenitiesCreateOrConnectWithoutHotelInputSchema: z.ZodType<Prisma.AmenitiesCreateOrConnectWithoutHotelInput> = z.object({
  where: z.lazy(() => AmenitiesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AmenitiesCreateWithoutHotelInputSchema),z.lazy(() => AmenitiesUncheckedCreateWithoutHotelInputSchema) ]),
}).strict();

export default AmenitiesCreateOrConnectWithoutHotelInputSchema;
