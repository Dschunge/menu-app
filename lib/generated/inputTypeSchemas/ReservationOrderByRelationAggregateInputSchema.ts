import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ReservationOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ReservationOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ReservationOrderByRelationAggregateInputSchema;
