import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ActivitySumOrderByAggregateInputSchema: z.ZodType<Prisma.ActivitySumOrderByAggregateInput> = z.object({
  price: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ActivitySumOrderByAggregateInputSchema;
