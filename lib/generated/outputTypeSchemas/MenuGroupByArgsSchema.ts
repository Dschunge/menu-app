import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { MenuWhereInputSchema } from '../inputTypeSchemas/MenuWhereInputSchema'
import { MenuOrderByWithAggregationInputSchema } from '../inputTypeSchemas/MenuOrderByWithAggregationInputSchema'
import { MenuScalarFieldEnumSchema } from '../inputTypeSchemas/MenuScalarFieldEnumSchema'
import { MenuScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/MenuScalarWhereWithAggregatesInputSchema'

export const MenuGroupByArgsSchema: z.ZodType<Prisma.MenuGroupByArgs> = z.object({
  where: MenuWhereInputSchema.optional(),
  orderBy: z.union([ MenuOrderByWithAggregationInputSchema.array(),MenuOrderByWithAggregationInputSchema ]).optional(),
  by: MenuScalarFieldEnumSchema.array(),
  having: MenuScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default MenuGroupByArgsSchema;
