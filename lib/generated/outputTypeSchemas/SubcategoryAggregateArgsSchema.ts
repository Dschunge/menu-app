import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { SubcategoryWhereInputSchema } from '../inputTypeSchemas/SubcategoryWhereInputSchema'
import { SubcategoryOrderByWithRelationInputSchema } from '../inputTypeSchemas/SubcategoryOrderByWithRelationInputSchema'
import { SubcategoryWhereUniqueInputSchema } from '../inputTypeSchemas/SubcategoryWhereUniqueInputSchema'

export const SubcategoryAggregateArgsSchema: z.ZodType<Prisma.SubcategoryAggregateArgs> = z.object({
  where: SubcategoryWhereInputSchema.optional(),
  orderBy: z.union([ SubcategoryOrderByWithRelationInputSchema.array(),SubcategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: SubcategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default SubcategoryAggregateArgsSchema;
