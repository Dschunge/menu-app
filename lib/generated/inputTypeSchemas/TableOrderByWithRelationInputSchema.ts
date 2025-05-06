import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { RestaurantOrderByWithRelationInputSchema } from './RestaurantOrderByWithRelationInputSchema';
import { ReservationOrderByRelationAggregateInputSchema } from './ReservationOrderByRelationAggregateInputSchema';
import { TableOrderByRelevanceInputSchema } from './TableOrderByRelevanceInputSchema';

export const TableOrderByWithRelationInputSchema: z.ZodType<Prisma.TableOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  number: z.lazy(() => SortOrderSchema).optional(),
  capacity: z.lazy(() => SortOrderSchema).optional(),
  location: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  restaurantId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  restaurant: z.lazy(() => RestaurantOrderByWithRelationInputSchema).optional(),
  reservations: z.lazy(() => ReservationOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => TableOrderByRelevanceInputSchema).optional()
}).strict();

export default TableOrderByWithRelationInputSchema;
