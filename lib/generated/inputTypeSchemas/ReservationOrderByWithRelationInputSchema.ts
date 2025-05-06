import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { CustomerOrderByWithRelationInputSchema } from './CustomerOrderByWithRelationInputSchema';
import { TableOrderByWithRelationInputSchema } from './TableOrderByWithRelationInputSchema';
import { RestaurantOrderByWithRelationInputSchema } from './RestaurantOrderByWithRelationInputSchema';
import { ReservationOrderByRelevanceInputSchema } from './ReservationOrderByRelevanceInputSchema';

export const ReservationOrderByWithRelationInputSchema: z.ZodType<Prisma.ReservationOrderByWithRelationInput> = z.object({
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
  customer: z.lazy(() => CustomerOrderByWithRelationInputSchema).optional(),
  table: z.lazy(() => TableOrderByWithRelationInputSchema).optional(),
  restaurant: z.lazy(() => RestaurantOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => ReservationOrderByRelevanceInputSchema).optional()
}).strict();

export default ReservationOrderByWithRelationInputSchema;
