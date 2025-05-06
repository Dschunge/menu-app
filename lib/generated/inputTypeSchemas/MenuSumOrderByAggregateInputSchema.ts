import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const MenuSumOrderByAggregateInputSchema: z.ZodType<Prisma.MenuSumOrderByAggregateInput> = z.object({
  position: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default MenuSumOrderByAggregateInputSchema;
