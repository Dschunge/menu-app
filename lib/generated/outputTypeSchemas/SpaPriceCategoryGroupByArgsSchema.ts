import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { SpaPriceCategoryWhereInputSchema } from '../inputTypeSchemas/SpaPriceCategoryWhereInputSchema'
import { SpaPriceCategoryOrderByWithAggregationInputSchema } from '../inputTypeSchemas/SpaPriceCategoryOrderByWithAggregationInputSchema'
import { SpaPriceCategoryScalarFieldEnumSchema } from '../inputTypeSchemas/SpaPriceCategoryScalarFieldEnumSchema'
import { SpaPriceCategoryScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/SpaPriceCategoryScalarWhereWithAggregatesInputSchema'

export const SpaPriceCategoryGroupByArgsSchema: z.ZodType<Prisma.SpaPriceCategoryGroupByArgs> = z.object({
  where: SpaPriceCategoryWhereInputSchema.optional(),
  orderBy: z.union([ SpaPriceCategoryOrderByWithAggregationInputSchema.array(),SpaPriceCategoryOrderByWithAggregationInputSchema ]).optional(),
  by: SpaPriceCategoryScalarFieldEnumSchema.array(),
  having: SpaPriceCategoryScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default SpaPriceCategoryGroupByArgsSchema;
