import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TourWhereInputSchema } from './TourWhereInputSchema';

export const TourNullableScalarRelationFilterSchema: z.ZodType<Prisma.TourNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => TourWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => TourWhereInputSchema).optional().nullable()
}).strict();

export default TourNullableScalarRelationFilterSchema;
