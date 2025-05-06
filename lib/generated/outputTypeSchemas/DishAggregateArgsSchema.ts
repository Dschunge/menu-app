import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { DishWhereInputSchema } from '../inputTypeSchemas/DishWhereInputSchema'
import { DishOrderByWithRelationInputSchema } from '../inputTypeSchemas/DishOrderByWithRelationInputSchema'
import { DishWhereUniqueInputSchema } from '../inputTypeSchemas/DishWhereUniqueInputSchema'

export const DishAggregateArgsSchema: z.ZodType<Prisma.DishAggregateArgs> = z.object({
  where: DishWhereInputSchema.optional(),
  orderBy: z.union([ DishOrderByWithRelationInputSchema.array(),DishOrderByWithRelationInputSchema ]).optional(),
  cursor: DishWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default DishAggregateArgsSchema;
