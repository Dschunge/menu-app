import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TableWhereInputSchema } from './TableWhereInputSchema';

export const TableNullableScalarRelationFilterSchema: z.ZodType<Prisma.TableNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => TableWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => TableWhereInputSchema).optional().nullable()
}).strict();

export default TableNullableScalarRelationFilterSchema;
