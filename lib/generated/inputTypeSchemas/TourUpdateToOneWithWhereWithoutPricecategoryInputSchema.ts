import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TourWhereInputSchema } from './TourWhereInputSchema';
import { TourUpdateWithoutPricecategoryInputSchema } from './TourUpdateWithoutPricecategoryInputSchema';
import { TourUncheckedUpdateWithoutPricecategoryInputSchema } from './TourUncheckedUpdateWithoutPricecategoryInputSchema';

export const TourUpdateToOneWithWhereWithoutPricecategoryInputSchema: z.ZodType<Prisma.TourUpdateToOneWithWhereWithoutPricecategoryInput> = z.object({
  where: z.lazy(() => TourWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TourUpdateWithoutPricecategoryInputSchema),z.lazy(() => TourUncheckedUpdateWithoutPricecategoryInputSchema) ]),
}).strict();

export default TourUpdateToOneWithWhereWithoutPricecategoryInputSchema;
