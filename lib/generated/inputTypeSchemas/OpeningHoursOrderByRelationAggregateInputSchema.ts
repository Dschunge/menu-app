import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const OpeningHoursOrderByRelationAggregateInputSchema: z.ZodType<Prisma.OpeningHoursOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default OpeningHoursOrderByRelationAggregateInputSchema;
