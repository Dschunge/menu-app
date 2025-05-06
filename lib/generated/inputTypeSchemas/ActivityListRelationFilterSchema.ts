import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ActivityWhereInputSchema } from './ActivityWhereInputSchema';

export const ActivityListRelationFilterSchema: z.ZodType<Prisma.ActivityListRelationFilter> = z.object({
  every: z.lazy(() => ActivityWhereInputSchema).optional(),
  some: z.lazy(() => ActivityWhereInputSchema).optional(),
  none: z.lazy(() => ActivityWhereInputSchema).optional()
}).strict();

export default ActivityListRelationFilterSchema;
