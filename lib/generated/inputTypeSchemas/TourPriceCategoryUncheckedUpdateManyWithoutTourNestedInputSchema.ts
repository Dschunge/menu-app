import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TourPriceCategoryCreateWithoutTourInputSchema } from './TourPriceCategoryCreateWithoutTourInputSchema';
import { TourPriceCategoryUncheckedCreateWithoutTourInputSchema } from './TourPriceCategoryUncheckedCreateWithoutTourInputSchema';
import { TourPriceCategoryCreateOrConnectWithoutTourInputSchema } from './TourPriceCategoryCreateOrConnectWithoutTourInputSchema';
import { TourPriceCategoryUpsertWithWhereUniqueWithoutTourInputSchema } from './TourPriceCategoryUpsertWithWhereUniqueWithoutTourInputSchema';
import { TourPriceCategoryCreateManyTourInputEnvelopeSchema } from './TourPriceCategoryCreateManyTourInputEnvelopeSchema';
import { TourPriceCategoryWhereUniqueInputSchema } from './TourPriceCategoryWhereUniqueInputSchema';
import { TourPriceCategoryUpdateWithWhereUniqueWithoutTourInputSchema } from './TourPriceCategoryUpdateWithWhereUniqueWithoutTourInputSchema';
import { TourPriceCategoryUpdateManyWithWhereWithoutTourInputSchema } from './TourPriceCategoryUpdateManyWithWhereWithoutTourInputSchema';
import { TourPriceCategoryScalarWhereInputSchema } from './TourPriceCategoryScalarWhereInputSchema';

export const TourPriceCategoryUncheckedUpdateManyWithoutTourNestedInputSchema: z.ZodType<Prisma.TourPriceCategoryUncheckedUpdateManyWithoutTourNestedInput> = z.object({
  create: z.union([ z.lazy(() => TourPriceCategoryCreateWithoutTourInputSchema),z.lazy(() => TourPriceCategoryCreateWithoutTourInputSchema).array(),z.lazy(() => TourPriceCategoryUncheckedCreateWithoutTourInputSchema),z.lazy(() => TourPriceCategoryUncheckedCreateWithoutTourInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TourPriceCategoryCreateOrConnectWithoutTourInputSchema),z.lazy(() => TourPriceCategoryCreateOrConnectWithoutTourInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TourPriceCategoryUpsertWithWhereUniqueWithoutTourInputSchema),z.lazy(() => TourPriceCategoryUpsertWithWhereUniqueWithoutTourInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TourPriceCategoryCreateManyTourInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TourPriceCategoryWhereUniqueInputSchema),z.lazy(() => TourPriceCategoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TourPriceCategoryWhereUniqueInputSchema),z.lazy(() => TourPriceCategoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TourPriceCategoryWhereUniqueInputSchema),z.lazy(() => TourPriceCategoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TourPriceCategoryWhereUniqueInputSchema),z.lazy(() => TourPriceCategoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TourPriceCategoryUpdateWithWhereUniqueWithoutTourInputSchema),z.lazy(() => TourPriceCategoryUpdateWithWhereUniqueWithoutTourInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TourPriceCategoryUpdateManyWithWhereWithoutTourInputSchema),z.lazy(() => TourPriceCategoryUpdateManyWithWhereWithoutTourInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TourPriceCategoryScalarWhereInputSchema),z.lazy(() => TourPriceCategoryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TourPriceCategoryUncheckedUpdateManyWithoutTourNestedInputSchema;
