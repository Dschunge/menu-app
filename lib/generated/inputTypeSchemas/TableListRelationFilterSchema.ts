import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TableWhereInputSchema } from './TableWhereInputSchema';

export const TableListRelationFilterSchema: z.ZodType<Prisma.TableListRelationFilter> = z.object({
  every: z.lazy(() => TableWhereInputSchema).optional(),
  some: z.lazy(() => TableWhereInputSchema).optional(),
  none: z.lazy(() => TableWhereInputSchema).optional()
}).strict();

export default TableListRelationFilterSchema;
