import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TVChannelsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TVChannelsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TVChannelsOrderByRelationAggregateInputSchema;
