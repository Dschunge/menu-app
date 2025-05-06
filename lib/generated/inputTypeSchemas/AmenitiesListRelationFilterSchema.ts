import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { AmenitiesWhereInputSchema } from './AmenitiesWhereInputSchema';

export const AmenitiesListRelationFilterSchema: z.ZodType<Prisma.AmenitiesListRelationFilter> = z.object({
  every: z.lazy(() => AmenitiesWhereInputSchema).optional(),
  some: z.lazy(() => AmenitiesWhereInputSchema).optional(),
  none: z.lazy(() => AmenitiesWhereInputSchema).optional()
}).strict();

export default AmenitiesListRelationFilterSchema;
