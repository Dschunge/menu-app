import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { AmenitiesCreateWithoutHotelInputSchema } from './AmenitiesCreateWithoutHotelInputSchema';
import { AmenitiesUncheckedCreateWithoutHotelInputSchema } from './AmenitiesUncheckedCreateWithoutHotelInputSchema';
import { AmenitiesCreateOrConnectWithoutHotelInputSchema } from './AmenitiesCreateOrConnectWithoutHotelInputSchema';
import { AmenitiesCreateManyHotelInputEnvelopeSchema } from './AmenitiesCreateManyHotelInputEnvelopeSchema';
import { AmenitiesWhereUniqueInputSchema } from './AmenitiesWhereUniqueInputSchema';

export const AmenitiesUncheckedCreateNestedManyWithoutHotelInputSchema: z.ZodType<Prisma.AmenitiesUncheckedCreateNestedManyWithoutHotelInput> = z.object({
  create: z.union([ z.lazy(() => AmenitiesCreateWithoutHotelInputSchema),z.lazy(() => AmenitiesCreateWithoutHotelInputSchema).array(),z.lazy(() => AmenitiesUncheckedCreateWithoutHotelInputSchema),z.lazy(() => AmenitiesUncheckedCreateWithoutHotelInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AmenitiesCreateOrConnectWithoutHotelInputSchema),z.lazy(() => AmenitiesCreateOrConnectWithoutHotelInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AmenitiesCreateManyHotelInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AmenitiesWhereUniqueInputSchema),z.lazy(() => AmenitiesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default AmenitiesUncheckedCreateNestedManyWithoutHotelInputSchema;
