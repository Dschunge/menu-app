import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ReservationCountOrderByAggregateInputSchema } from './ReservationCountOrderByAggregateInputSchema';
import { ReservationAvgOrderByAggregateInputSchema } from './ReservationAvgOrderByAggregateInputSchema';
import { ReservationMaxOrderByAggregateInputSchema } from './ReservationMaxOrderByAggregateInputSchema';
import { ReservationMinOrderByAggregateInputSchema } from './ReservationMinOrderByAggregateInputSchema';
import { ReservationSumOrderByAggregateInputSchema } from './ReservationSumOrderByAggregateInputSchema';

export const ReservationOrderByWithAggregationInputSchema: z.ZodType<Prisma.ReservationOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  startTime: z.lazy(() => SortOrderSchema).optional(),
  endTime: z.lazy(() => SortOrderSchema).optional(),
  partySize: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  customerId: z.lazy(() => SortOrderSchema).optional(),
  tableId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  restaurantId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ReservationCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ReservationAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ReservationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ReservationMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ReservationSumOrderByAggregateInputSchema).optional()
}).strict();

export default ReservationOrderByWithAggregationInputSchema;
