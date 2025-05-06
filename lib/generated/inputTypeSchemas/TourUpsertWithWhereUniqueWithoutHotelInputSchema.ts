import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TourWhereUniqueInputSchema } from './TourWhereUniqueInputSchema';
import { TourUpdateWithoutHotelInputSchema } from './TourUpdateWithoutHotelInputSchema';
import { TourUncheckedUpdateWithoutHotelInputSchema } from './TourUncheckedUpdateWithoutHotelInputSchema';
import { TourCreateWithoutHotelInputSchema } from './TourCreateWithoutHotelInputSchema';
import { TourUncheckedCreateWithoutHotelInputSchema } from './TourUncheckedCreateWithoutHotelInputSchema';

export const TourUpsertWithWhereUniqueWithoutHotelInputSchema: z.ZodType<Prisma.TourUpsertWithWhereUniqueWithoutHotelInput> = z.object({
  where: z.lazy(() => TourWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TourUpdateWithoutHotelInputSchema),z.lazy(() => TourUncheckedUpdateWithoutHotelInputSchema) ]),
  create: z.union([ z.lazy(() => TourCreateWithoutHotelInputSchema),z.lazy(() => TourUncheckedCreateWithoutHotelInputSchema) ]),
}).strict();

export default TourUpsertWithWhereUniqueWithoutHotelInputSchema;
