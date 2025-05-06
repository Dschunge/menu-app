import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TVChannelsWhereInputSchema } from './TVChannelsWhereInputSchema';

export const TVChannelsListRelationFilterSchema: z.ZodType<Prisma.TVChannelsListRelationFilter> = z.object({
  every: z.lazy(() => TVChannelsWhereInputSchema).optional(),
  some: z.lazy(() => TVChannelsWhereInputSchema).optional(),
  none: z.lazy(() => TVChannelsWhereInputSchema).optional()
}).strict();

export default TVChannelsListRelationFilterSchema;
