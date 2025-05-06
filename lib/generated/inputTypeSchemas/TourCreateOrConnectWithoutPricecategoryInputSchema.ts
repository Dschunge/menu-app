import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TourWhereUniqueInputSchema } from './TourWhereUniqueInputSchema';
import { TourCreateWithoutPricecategoryInputSchema } from './TourCreateWithoutPricecategoryInputSchema';
import { TourUncheckedCreateWithoutPricecategoryInputSchema } from './TourUncheckedCreateWithoutPricecategoryInputSchema';

export const TourCreateOrConnectWithoutPricecategoryInputSchema: z.ZodType<Prisma.TourCreateOrConnectWithoutPricecategoryInput> = z.object({
  where: z.lazy(() => TourWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TourCreateWithoutPricecategoryInputSchema),z.lazy(() => TourUncheckedCreateWithoutPricecategoryInputSchema) ]),
}).strict();

export default TourCreateOrConnectWithoutPricecategoryInputSchema;
