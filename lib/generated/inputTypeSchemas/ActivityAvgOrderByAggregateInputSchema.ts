import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ActivityAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ActivityAvgOrderByAggregateInput> = z.object({
  price: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ActivityAvgOrderByAggregateInputSchema;
