import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TourWhereUniqueInputSchema } from './TourWhereUniqueInputSchema';
import { TourCreateWithoutHotelInputSchema } from './TourCreateWithoutHotelInputSchema';
import { TourUncheckedCreateWithoutHotelInputSchema } from './TourUncheckedCreateWithoutHotelInputSchema';

export const TourCreateOrConnectWithoutHotelInputSchema: z.ZodType<Prisma.TourCreateOrConnectWithoutHotelInput> = z.object({
  where: z.lazy(() => TourWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TourCreateWithoutHotelInputSchema),z.lazy(() => TourUncheckedCreateWithoutHotelInputSchema) ]),
}).strict();

export default TourCreateOrConnectWithoutHotelInputSchema;
