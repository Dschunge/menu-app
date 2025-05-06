import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const OpeningHoursSumOrderByAggregateInputSchema: z.ZodType<Prisma.OpeningHoursSumOrderByAggregateInput> = z.object({
  dayOfWeek: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default OpeningHoursSumOrderByAggregateInputSchema;
