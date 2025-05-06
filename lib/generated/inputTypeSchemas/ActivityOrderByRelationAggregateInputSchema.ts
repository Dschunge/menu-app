import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ActivityOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ActivityOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ActivityOrderByRelationAggregateInputSchema;
