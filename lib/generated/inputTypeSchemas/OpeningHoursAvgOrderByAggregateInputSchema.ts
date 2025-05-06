import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const OpeningHoursAvgOrderByAggregateInputSchema: z.ZodType<Prisma.OpeningHoursAvgOrderByAggregateInput> = z.object({
  dayOfWeek: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default OpeningHoursAvgOrderByAggregateInputSchema;
