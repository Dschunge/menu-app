import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TourPriceCategoryWhereUniqueInputSchema } from './TourPriceCategoryWhereUniqueInputSchema';
import { TourPriceCategoryCreateWithoutTourInputSchema } from './TourPriceCategoryCreateWithoutTourInputSchema';
import { TourPriceCategoryUncheckedCreateWithoutTourInputSchema } from './TourPriceCategoryUncheckedCreateWithoutTourInputSchema';

export const TourPriceCategoryCreateOrConnectWithoutTourInputSchema: z.ZodType<Prisma.TourPriceCategoryCreateOrConnectWithoutTourInput> = z.object({
  where: z.lazy(() => TourPriceCategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TourPriceCategoryCreateWithoutTourInputSchema),z.lazy(() => TourPriceCategoryUncheckedCreateWithoutTourInputSchema) ]),
}).strict();

export default TourPriceCategoryCreateOrConnectWithoutTourInputSchema;
