import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ReservationAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ReservationAvgOrderByAggregateInput> = z.object({
  partySize: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ReservationAvgOrderByAggregateInputSchema;
