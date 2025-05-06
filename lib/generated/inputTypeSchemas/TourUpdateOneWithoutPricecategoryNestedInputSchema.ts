import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TourCreateWithoutPricecategoryInputSchema } from './TourCreateWithoutPricecategoryInputSchema';
import { TourUncheckedCreateWithoutPricecategoryInputSchema } from './TourUncheckedCreateWithoutPricecategoryInputSchema';
import { TourCreateOrConnectWithoutPricecategoryInputSchema } from './TourCreateOrConnectWithoutPricecategoryInputSchema';
import { TourUpsertWithoutPricecategoryInputSchema } from './TourUpsertWithoutPricecategoryInputSchema';
import { TourWhereInputSchema } from './TourWhereInputSchema';
import { TourWhereUniqueInputSchema } from './TourWhereUniqueInputSchema';
import { TourUpdateToOneWithWhereWithoutPricecategoryInputSchema } from './TourUpdateToOneWithWhereWithoutPricecategoryInputSchema';
import { TourUpdateWithoutPricecategoryInputSchema } from './TourUpdateWithoutPricecategoryInputSchema';
import { TourUncheckedUpdateWithoutPricecategoryInputSchema } from './TourUncheckedUpdateWithoutPricecategoryInputSchema';

export const TourUpdateOneWithoutPricecategoryNestedInputSchema: z.ZodType<Prisma.TourUpdateOneWithoutPricecategoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => TourCreateWithoutPricecategoryInputSchema),z.lazy(() => TourUncheckedCreateWithoutPricecategoryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TourCreateOrConnectWithoutPricecategoryInputSchema).optional(),
  upsert: z.lazy(() => TourUpsertWithoutPricecategoryInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => TourWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => TourWhereInputSchema) ]).optional(),
  connect: z.lazy(() => TourWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TourUpdateToOneWithWhereWithoutPricecategoryInputSchema),z.lazy(() => TourUpdateWithoutPricecategoryInputSchema),z.lazy(() => TourUncheckedUpdateWithoutPricecategoryInputSchema) ]).optional(),
}).strict();

export default TourUpdateOneWithoutPricecategoryNestedInputSchema;
