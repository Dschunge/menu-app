import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TableSumOrderByAggregateInputSchema: z.ZodType<Prisma.TableSumOrderByAggregateInput> = z.object({
  number: z.lazy(() => SortOrderSchema).optional(),
  capacity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TableSumOrderByAggregateInputSchema;
