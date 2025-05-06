import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TourPriceCategoryCreateWithoutTourInputSchema } from './TourPriceCategoryCreateWithoutTourInputSchema';
import { TourPriceCategoryUncheckedCreateWithoutTourInputSchema } from './TourPriceCategoryUncheckedCreateWithoutTourInputSchema';
import { TourPriceCategoryCreateOrConnectWithoutTourInputSchema } from './TourPriceCategoryCreateOrConnectWithoutTourInputSchema';
import { TourPriceCategoryCreateManyTourInputEnvelopeSchema } from './TourPriceCategoryCreateManyTourInputEnvelopeSchema';
import { TourPriceCategoryWhereUniqueInputSchema } from './TourPriceCategoryWhereUniqueInputSchema';

export const TourPriceCategoryUncheckedCreateNestedManyWithoutTourInputSchema: z.ZodType<Prisma.TourPriceCategoryUncheckedCreateNestedManyWithoutTourInput> = z.object({
  create: z.union([ z.lazy(() => TourPriceCategoryCreateWithoutTourInputSchema),z.lazy(() => TourPriceCategoryCreateWithoutTourInputSchema).array(),z.lazy(() => TourPriceCategoryUncheckedCreateWithoutTourInputSchema),z.lazy(() => TourPriceCategoryUncheckedCreateWithoutTourInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TourPriceCategoryCreateOrConnectWithoutTourInputSchema),z.lazy(() => TourPriceCategoryCreateOrConnectWithoutTourInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TourPriceCategoryCreateManyTourInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TourPriceCategoryWhereUniqueInputSchema),z.lazy(() => TourPriceCategoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TourPriceCategoryUncheckedCreateNestedManyWithoutTourInputSchema;
