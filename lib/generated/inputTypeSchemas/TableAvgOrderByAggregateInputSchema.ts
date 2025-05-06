import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TableAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TableAvgOrderByAggregateInput> = z.object({
  number: z.lazy(() => SortOrderSchema).optional(),
  capacity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TableAvgOrderByAggregateInputSchema;
