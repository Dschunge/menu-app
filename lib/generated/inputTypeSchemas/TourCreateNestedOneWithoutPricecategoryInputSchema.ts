import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TourCreateWithoutPricecategoryInputSchema } from './TourCreateWithoutPricecategoryInputSchema';
import { TourUncheckedCreateWithoutPricecategoryInputSchema } from './TourUncheckedCreateWithoutPricecategoryInputSchema';
import { TourCreateOrConnectWithoutPricecategoryInputSchema } from './TourCreateOrConnectWithoutPricecategoryInputSchema';
import { TourWhereUniqueInputSchema } from './TourWhereUniqueInputSchema';

export const TourCreateNestedOneWithoutPricecategoryInputSchema: z.ZodType<Prisma.TourCreateNestedOneWithoutPricecategoryInput> = z.object({
  create: z.union([ z.lazy(() => TourCreateWithoutPricecategoryInputSchema),z.lazy(() => TourUncheckedCreateWithoutPricecategoryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TourCreateOrConnectWithoutPricecategoryInputSchema).optional(),
  connect: z.lazy(() => TourWhereUniqueInputSchema).optional()
}).strict();

export default TourCreateNestedOneWithoutPricecategoryInputSchema;
