import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TableSelectSchema } from '../inputTypeSchemas/TableSelectSchema';
import { TableIncludeSchema } from '../inputTypeSchemas/TableIncludeSchema';

export const TableArgsSchema: z.ZodType<Prisma.TableDefaultArgs> = z.object({
  select: z.lazy(() => TableSelectSchema).optional(),
  include: z.lazy(() => TableIncludeSchema).optional(),
}).strict();

export default TableArgsSchema;
