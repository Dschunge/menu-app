import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { SubcategoryWhereInputSchema } from '../inputTypeSchemas/SubcategoryWhereInputSchema'
import { SubcategoryOrderByWithAggregationInputSchema } from '../inputTypeSchemas/SubcategoryOrderByWithAggregationInputSchema'
import { SubcategoryScalarFieldEnumSchema } from '../inputTypeSchemas/SubcategoryScalarFieldEnumSchema'
import { SubcategoryScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/SubcategoryScalarWhereWithAggregatesInputSchema'

export const SubcategoryGroupByArgsSchema: z.ZodType<Prisma.SubcategoryGroupByArgs> = z.object({
  where: SubcategoryWhereInputSchema.optional(),
  orderBy: z.union([ SubcategoryOrderByWithAggregationInputSchema.array(),SubcategoryOrderByWithAggregationInputSchema ]).optional(),
  by: SubcategoryScalarFieldEnumSchema.array(),
  having: SubcategoryScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default SubcategoryGroupByArgsSchema;
