import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TableWhereInputSchema } from '../inputTypeSchemas/TableWhereInputSchema'

export const TableDeleteManyArgsSchema: z.ZodType<Prisma.TableDeleteManyArgs> = z.object({
  where: TableWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default TableDeleteManyArgsSchema;
