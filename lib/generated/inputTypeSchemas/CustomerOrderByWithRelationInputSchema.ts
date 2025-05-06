import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ReservationOrderByRelationAggregateInputSchema } from './ReservationOrderByRelationAggregateInputSchema';
import { CustomerOrderByRelevanceInputSchema } from './CustomerOrderByRelevanceInputSchema';

export const CustomerOrderByWithRelationInputSchema: z.ZodType<Prisma.CustomerOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  reservations: z.lazy(() => ReservationOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => CustomerOrderByRelevanceInputSchema).optional()
}).strict();

export default CustomerOrderByWithRelationInputSchema;
