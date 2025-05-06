import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TourPriceCategoryScalarWhereInputSchema } from './TourPriceCategoryScalarWhereInputSchema';
import { TourPriceCategoryUpdateManyMutationInputSchema } from './TourPriceCategoryUpdateManyMutationInputSchema';
import { TourPriceCategoryUncheckedUpdateManyWithoutTourInputSchema } from './TourPriceCategoryUncheckedUpdateManyWithoutTourInputSchema';

export const TourPriceCategoryUpdateManyWithWhereWithoutTourInputSchema: z.ZodType<Prisma.TourPriceCategoryUpdateManyWithWhereWithoutTourInput> = z.object({
  where: z.lazy(() => TourPriceCategoryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TourPriceCategoryUpdateManyMutationInputSchema),z.lazy(() => TourPriceCategoryUncheckedUpdateManyWithoutTourInputSchema) ]),
}).strict();

export default TourPriceCategoryUpdateManyWithWhereWithoutTourInputSchema;
