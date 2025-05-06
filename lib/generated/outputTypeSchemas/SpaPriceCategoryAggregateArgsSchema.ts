import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { SpaPriceCategoryWhereInputSchema } from '../inputTypeSchemas/SpaPriceCategoryWhereInputSchema'
import { SpaPriceCategoryOrderByWithRelationInputSchema } from '../inputTypeSchemas/SpaPriceCategoryOrderByWithRelationInputSchema'
import { SpaPriceCategoryWhereUniqueInputSchema } from '../inputTypeSchemas/SpaPriceCategoryWhereUniqueInputSchema'

export const SpaPriceCategoryAggregateArgsSchema: z.ZodType<Prisma.SpaPriceCategoryAggregateArgs> = z.object({
  where: SpaPriceCategoryWhereInputSchema.optional(),
  orderBy: z.union([ SpaPriceCategoryOrderByWithRelationInputSchema.array(),SpaPriceCategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: SpaPriceCategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default SpaPriceCategoryAggregateArgsSchema;
