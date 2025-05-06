import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TourCreateWithoutHotelInputSchema } from './TourCreateWithoutHotelInputSchema';
import { TourUncheckedCreateWithoutHotelInputSchema } from './TourUncheckedCreateWithoutHotelInputSchema';
import { TourCreateOrConnectWithoutHotelInputSchema } from './TourCreateOrConnectWithoutHotelInputSchema';
import { TourCreateManyHotelInputEnvelopeSchema } from './TourCreateManyHotelInputEnvelopeSchema';
import { TourWhereUniqueInputSchema } from './TourWhereUniqueInputSchema';

export const TourUncheckedCreateNestedManyWithoutHotelInputSchema: z.ZodType<Prisma.TourUncheckedCreateNestedManyWithoutHotelInput> = z.object({
  create: z.union([ z.lazy(() => TourCreateWithoutHotelInputSchema),z.lazy(() => TourCreateWithoutHotelInputSchema).array(),z.lazy(() => TourUncheckedCreateWithoutHotelInputSchema),z.lazy(() => TourUncheckedCreateWithoutHotelInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TourCreateOrConnectWithoutHotelInputSchema),z.lazy(() => TourCreateOrConnectWithoutHotelInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TourCreateManyHotelInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TourWhereUniqueInputSchema),z.lazy(() => TourWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TourUncheckedCreateNestedManyWithoutHotelInputSchema;
