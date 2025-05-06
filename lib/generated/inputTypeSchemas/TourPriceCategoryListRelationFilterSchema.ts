import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TourPriceCategoryWhereInputSchema } from './TourPriceCategoryWhereInputSchema';

export const TourPriceCategoryListRelationFilterSchema: z.ZodType<Prisma.TourPriceCategoryListRelationFilter> = z.object({
  every: z.lazy(() => TourPriceCategoryWhereInputSchema).optional(),
  some: z.lazy(() => TourPriceCategoryWhereInputSchema).optional(),
  none: z.lazy(() => TourPriceCategoryWhereInputSchema).optional()
}).strict();

export default TourPriceCategoryListRelationFilterSchema;
