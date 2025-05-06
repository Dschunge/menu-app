import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DishSumOrderByAggregateInputSchema: z.ZodType<Prisma.DishSumOrderByAggregateInput> = z.object({
  sku: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  availableAtDayOfWeek: z.lazy(() => SortOrderSchema).optional(),
  prepTime: z.lazy(() => SortOrderSchema).optional(),
  course_number: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default DishSumOrderByAggregateInputSchema;
