import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TourUpdateWithoutPricecategoryInputSchema } from './TourUpdateWithoutPricecategoryInputSchema';
import { TourUncheckedUpdateWithoutPricecategoryInputSchema } from './TourUncheckedUpdateWithoutPricecategoryInputSchema';
import { TourCreateWithoutPricecategoryInputSchema } from './TourCreateWithoutPricecategoryInputSchema';
import { TourUncheckedCreateWithoutPricecategoryInputSchema } from './TourUncheckedCreateWithoutPricecategoryInputSchema';
import { TourWhereInputSchema } from './TourWhereInputSchema';

export const TourUpsertWithoutPricecategoryInputSchema: z.ZodType<Prisma.TourUpsertWithoutPricecategoryInput> = z.object({
  update: z.union([ z.lazy(() => TourUpdateWithoutPricecategoryInputSchema),z.lazy(() => TourUncheckedUpdateWithoutPricecategoryInputSchema) ]),
  create: z.union([ z.lazy(() => TourCreateWithoutPricecategoryInputSchema),z.lazy(() => TourUncheckedCreateWithoutPricecategoryInputSchema) ]),
  where: z.lazy(() => TourWhereInputSchema).optional()
}).strict();

export default TourUpsertWithoutPricecategoryInputSchema;
