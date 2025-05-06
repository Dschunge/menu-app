import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const RestaurantSumOrderByAggregateInputSchema: z.ZodType<Prisma.RestaurantSumOrderByAggregateInput> = z.object({
  listorder: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default RestaurantSumOrderByAggregateInputSchema;
