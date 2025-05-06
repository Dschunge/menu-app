import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TableUpdateManyMutationInputSchema } from '../inputTypeSchemas/TableUpdateManyMutationInputSchema'
import { TableUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TableUncheckedUpdateManyInputSchema'
import { TableWhereInputSchema } from '../inputTypeSchemas/TableWhereInputSchema'

export const TableUpdateManyArgsSchema: z.ZodType<Prisma.TableUpdateManyArgs> = z.object({
  data: z.union([ TableUpdateManyMutationInputSchema,TableUncheckedUpdateManyInputSchema ]),
  where: TableWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default TableUpdateManyArgsSchema;
