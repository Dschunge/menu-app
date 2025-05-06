import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { DishWhereInputSchema } from '../inputTypeSchemas/DishWhereInputSchema'
import { DishOrderByWithAggregationInputSchema } from '../inputTypeSchemas/DishOrderByWithAggregationInputSchema'
import { DishScalarFieldEnumSchema } from '../inputTypeSchemas/DishScalarFieldEnumSchema'
import { DishScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/DishScalarWhereWithAggregatesInputSchema'

export const DishGroupByArgsSchema: z.ZodType<Prisma.DishGroupByArgs> = z.object({
  where: DishWhereInputSchema.optional(),
  orderBy: z.union([ DishOrderByWithAggregationInputSchema.array(),DishOrderByWithAggregationInputSchema ]).optional(),
  by: DishScalarFieldEnumSchema.array(),
  having: DishScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default DishGroupByArgsSchema;
