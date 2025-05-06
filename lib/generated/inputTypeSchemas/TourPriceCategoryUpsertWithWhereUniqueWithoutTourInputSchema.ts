import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TourPriceCategoryWhereUniqueInputSchema } from './TourPriceCategoryWhereUniqueInputSchema';
import { TourPriceCategoryUpdateWithoutTourInputSchema } from './TourPriceCategoryUpdateWithoutTourInputSchema';
import { TourPriceCategoryUncheckedUpdateWithoutTourInputSchema } from './TourPriceCategoryUncheckedUpdateWithoutTourInputSchema';
import { TourPriceCategoryCreateWithoutTourInputSchema } from './TourPriceCategoryCreateWithoutTourInputSchema';
import { TourPriceCategoryUncheckedCreateWithoutTourInputSchema } from './TourPriceCategoryUncheckedCreateWithoutTourInputSchema';

export const TourPriceCategoryUpsertWithWhereUniqueWithoutTourInputSchema: z.ZodType<Prisma.TourPriceCategoryUpsertWithWhereUniqueWithoutTourInput> = z.object({
  where: z.lazy(() => TourPriceCategoryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TourPriceCategoryUpdateWithoutTourInputSchema),z.lazy(() => TourPriceCategoryUncheckedUpdateWithoutTourInputSchema) ]),
  create: z.union([ z.lazy(() => TourPriceCategoryCreateWithoutTourInputSchema),z.lazy(() => TourPriceCategoryUncheckedCreateWithoutTourInputSchema) ]),
}).strict();

export default TourPriceCategoryUpsertWithWhereUniqueWithoutTourInputSchema;
