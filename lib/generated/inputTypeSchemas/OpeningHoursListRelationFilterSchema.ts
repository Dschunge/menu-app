import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { OpeningHoursWhereInputSchema } from './OpeningHoursWhereInputSchema';

export const OpeningHoursListRelationFilterSchema: z.ZodType<Prisma.OpeningHoursListRelationFilter> = z.object({
  every: z.lazy(() => OpeningHoursWhereInputSchema).optional(),
  some: z.lazy(() => OpeningHoursWhereInputSchema).optional(),
  none: z.lazy(() => OpeningHoursWhereInputSchema).optional()
}).strict();

export default OpeningHoursListRelationFilterSchema;
