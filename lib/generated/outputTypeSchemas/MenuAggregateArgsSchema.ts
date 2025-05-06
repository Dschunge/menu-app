import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { MenuWhereInputSchema } from '../inputTypeSchemas/MenuWhereInputSchema'
import { MenuOrderByWithRelationInputSchema } from '../inputTypeSchemas/MenuOrderByWithRelationInputSchema'
import { MenuWhereUniqueInputSchema } from '../inputTypeSchemas/MenuWhereUniqueInputSchema'

export const MenuAggregateArgsSchema: z.ZodType<Prisma.MenuAggregateArgs> = z.object({
  where: MenuWhereInputSchema.optional(),
  orderBy: z.union([ MenuOrderByWithRelationInputSchema.array(),MenuOrderByWithRelationInputSchema ]).optional(),
  cursor: MenuWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default MenuAggregateArgsSchema;
