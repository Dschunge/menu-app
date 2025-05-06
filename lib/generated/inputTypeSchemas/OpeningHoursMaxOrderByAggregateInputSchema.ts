import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const OpeningHoursMaxOrderByAggregateInputSchema: z.ZodType<Prisma.OpeningHoursMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  dayOfWeek: z.lazy(() => SortOrderSchema).optional(),
  openTime: z.lazy(() => SortOrderSchema).optional(),
  closeTime: z.lazy(() => SortOrderSchema).optional(),
  isClosed: z.lazy(() => SortOrderSchema).optional(),
  restaurantId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default OpeningHoursMaxOrderByAggregateInputSchema;
