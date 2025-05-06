import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { SubSubcategoryWhereInputSchema } from '../inputTypeSchemas/SubSubcategoryWhereInputSchema'
import { SubSubcategoryOrderByWithAggregationInputSchema } from '../inputTypeSchemas/SubSubcategoryOrderByWithAggregationInputSchema'
import { SubSubcategoryScalarFieldEnumSchema } from '../inputTypeSchemas/SubSubcategoryScalarFieldEnumSchema'
import { SubSubcategoryScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/SubSubcategoryScalarWhereWithAggregatesInputSchema'

export const SubSubcategoryGroupByArgsSchema: z.ZodType<Prisma.SubSubcategoryGroupByArgs> = z.object({
  where: SubSubcategoryWhereInputSchema.optional(),
  orderBy: z.union([ SubSubcategoryOrderByWithAggregationInputSchema.array(),SubSubcategoryOrderByWithAggregationInputSchema ]).optional(),
  by: SubSubcategoryScalarFieldEnumSchema.array(),
  having: SubSubcategoryScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default SubSubcategoryGroupByArgsSchema;
