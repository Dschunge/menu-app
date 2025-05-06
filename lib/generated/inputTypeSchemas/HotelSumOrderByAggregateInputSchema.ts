import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const HotelSumOrderByAggregateInputSchema: z.ZodType<Prisma.HotelSumOrderByAggregateInput> = z.object({
  lat: z.lazy(() => SortOrderSchema).optional(),
  lng: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default HotelSumOrderByAggregateInputSchema;
