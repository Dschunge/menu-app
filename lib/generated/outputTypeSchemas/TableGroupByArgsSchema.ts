import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TableWhereInputSchema } from '../inputTypeSchemas/TableWhereInputSchema'
import { TableOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TableOrderByWithAggregationInputSchema'
import { TableScalarFieldEnumSchema } from '../inputTypeSchemas/TableScalarFieldEnumSchema'
import { TableScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TableScalarWhereWithAggregatesInputSchema'

export const TableGroupByArgsSchema: z.ZodType<Prisma.TableGroupByArgs> = z.object({
  where: TableWhereInputSchema.optional(),
  orderBy: z.union([ TableOrderByWithAggregationInputSchema.array(),TableOrderByWithAggregationInputSchema ]).optional(),
  by: TableScalarFieldEnumSchema.array(),
  having: TableScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default TableGroupByArgsSchema;
