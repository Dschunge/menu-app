import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TourAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TourAvgOrderByAggregateInput> = z.object({
  price: z.lazy(() => SortOrderSchema).optional(),
  priceKids: z.lazy(() => SortOrderSchema).optional(),
  discount: z.lazy(() => SortOrderSchema).optional(),
  maxPeople: z.lazy(() => SortOrderSchema).optional(),
  minPeople: z.lazy(() => SortOrderSchema).optional(),
  minAge: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TourAvgOrderByAggregateInputSchema;
