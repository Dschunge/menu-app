import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TourPriceCategoryWhereUniqueInputSchema } from './TourPriceCategoryWhereUniqueInputSchema';
import { TourPriceCategoryUpdateWithoutTourInputSchema } from './TourPriceCategoryUpdateWithoutTourInputSchema';
import { TourPriceCategoryUncheckedUpdateWithoutTourInputSchema } from './TourPriceCategoryUncheckedUpdateWithoutTourInputSchema';

export const TourPriceCategoryUpdateWithWhereUniqueWithoutTourInputSchema: z.ZodType<Prisma.TourPriceCategoryUpdateWithWhereUniqueWithoutTourInput> = z.object({
  where: z.lazy(() => TourPriceCategoryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TourPriceCategoryUpdateWithoutTourInputSchema),z.lazy(() => TourPriceCategoryUncheckedUpdateWithoutTourInputSchema) ]),
}).strict();

export default TourPriceCategoryUpdateWithWhereUniqueWithoutTourInputSchema;
