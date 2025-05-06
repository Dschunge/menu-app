import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TourWhereInputSchema } from './TourWhereInputSchema';

export const TourListRelationFilterSchema: z.ZodType<Prisma.TourListRelationFilter> = z.object({
  every: z.lazy(() => TourWhereInputSchema).optional(),
  some: z.lazy(() => TourWhereInputSchema).optional(),
  none: z.lazy(() => TourWhereInputSchema).optional()
}).strict();

export default TourListRelationFilterSchema;
