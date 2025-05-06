import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TourOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TourOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TourOrderByRelationAggregateInputSchema;
