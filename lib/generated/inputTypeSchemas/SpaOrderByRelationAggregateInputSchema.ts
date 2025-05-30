import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SpaOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SpaOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SpaOrderByRelationAggregateInputSchema;
