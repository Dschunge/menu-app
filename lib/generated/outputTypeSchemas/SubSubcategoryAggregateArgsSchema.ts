import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { SubSubcategoryWhereInputSchema } from '../inputTypeSchemas/SubSubcategoryWhereInputSchema'
import { SubSubcategoryOrderByWithRelationInputSchema } from '../inputTypeSchemas/SubSubcategoryOrderByWithRelationInputSchema'
import { SubSubcategoryWhereUniqueInputSchema } from '../inputTypeSchemas/SubSubcategoryWhereUniqueInputSchema'

export const SubSubcategoryAggregateArgsSchema: z.ZodType<Prisma.SubSubcategoryAggregateArgs> = z.object({
  where: SubSubcategoryWhereInputSchema.optional(),
  orderBy: z.union([ SubSubcategoryOrderByWithRelationInputSchema.array(),SubSubcategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: SubSubcategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default SubSubcategoryAggregateArgsSchema;
