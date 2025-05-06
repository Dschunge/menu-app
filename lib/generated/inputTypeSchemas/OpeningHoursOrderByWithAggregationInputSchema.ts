import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { OpeningHoursCountOrderByAggregateInputSchema } from './OpeningHoursCountOrderByAggregateInputSchema';
import { OpeningHoursAvgOrderByAggregateInputSchema } from './OpeningHoursAvgOrderByAggregateInputSchema';
import { OpeningHoursMaxOrderByAggregateInputSchema } from './OpeningHoursMaxOrderByAggregateInputSchema';
import { OpeningHoursMinOrderByAggregateInputSchema } from './OpeningHoursMinOrderByAggregateInputSchema';
import { OpeningHoursSumOrderByAggregateInputSchema } from './OpeningHoursSumOrderByAggregateInputSchema';

export const OpeningHoursOrderByWithAggregationInputSchema: z.ZodType<Prisma.OpeningHoursOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  dayOfWeek: z.lazy(() => SortOrderSchema).optional(),
  openTime: z.lazy(() => SortOrderSchema).optional(),
  closeTime: z.lazy(() => SortOrderSchema).optional(),
  isClosed: z.lazy(() => SortOrderSchema).optional(),
  restaurantId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => OpeningHoursCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => OpeningHoursAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => OpeningHoursMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => OpeningHoursMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => OpeningHoursSumOrderByAggregateInputSchema).optional()
}).strict();

export default OpeningHoursOrderByWithAggregationInputSchema;
