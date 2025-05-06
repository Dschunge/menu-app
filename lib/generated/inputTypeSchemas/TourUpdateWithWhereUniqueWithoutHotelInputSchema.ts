import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TourWhereUniqueInputSchema } from './TourWhereUniqueInputSchema';
import { TourUpdateWithoutHotelInputSchema } from './TourUpdateWithoutHotelInputSchema';
import { TourUncheckedUpdateWithoutHotelInputSchema } from './TourUncheckedUpdateWithoutHotelInputSchema';

export const TourUpdateWithWhereUniqueWithoutHotelInputSchema: z.ZodType<Prisma.TourUpdateWithWhereUniqueWithoutHotelInput> = z.object({
  where: z.lazy(() => TourWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TourUpdateWithoutHotelInputSchema),z.lazy(() => TourUncheckedUpdateWithoutHotelInputSchema) ]),
}).strict();

export default TourUpdateWithWhereUniqueWithoutHotelInputSchema;
