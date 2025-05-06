import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ReservationSumOrderByAggregateInputSchema: z.ZodType<Prisma.ReservationSumOrderByAggregateInput> = z.object({
  partySize: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ReservationSumOrderByAggregateInputSchema;
