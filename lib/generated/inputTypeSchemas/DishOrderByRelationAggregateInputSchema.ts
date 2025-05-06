import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DishOrderByRelationAggregateInputSchema: z.ZodType<Prisma.DishOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default DishOrderByRelationAggregateInputSchema;
