import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TableWhereInputSchema } from '../inputTypeSchemas/TableWhereInputSchema'
import { TableOrderByWithRelationInputSchema } from '../inputTypeSchemas/TableOrderByWithRelationInputSchema'
import { TableWhereUniqueInputSchema } from '../inputTypeSchemas/TableWhereUniqueInputSchema'

export const TableAggregateArgsSchema: z.ZodType<Prisma.TableAggregateArgs> = z.object({
  where: TableWhereInputSchema.optional(),
  orderBy: z.union([ TableOrderByWithRelationInputSchema.array(),TableOrderByWithRelationInputSchema ]).optional(),
  cursor: TableWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default TableAggregateArgsSchema;
