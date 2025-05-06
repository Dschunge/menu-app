import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { ActivityWhereInputSchema } from '../inputTypeSchemas/ActivityWhereInputSchema'
import { ActivityOrderByWithRelationInputSchema } from '../inputTypeSchemas/ActivityOrderByWithRelationInputSchema'
import { ActivityWhereUniqueInputSchema } from '../inputTypeSchemas/ActivityWhereUniqueInputSchema'

export const ActivityAggregateArgsSchema: z.ZodType<Prisma.ActivityAggregateArgs> = z.object({
  where: ActivityWhereInputSchema.optional(),
  orderBy: z.union([ ActivityOrderByWithRelationInputSchema.array(),ActivityOrderByWithRelationInputSchema ]).optional(),
  cursor: ActivityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ActivityAggregateArgsSchema;
