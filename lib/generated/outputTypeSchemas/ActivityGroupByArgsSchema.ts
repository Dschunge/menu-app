import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { ActivityWhereInputSchema } from '../inputTypeSchemas/ActivityWhereInputSchema'
import { ActivityOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ActivityOrderByWithAggregationInputSchema'
import { ActivityScalarFieldEnumSchema } from '../inputTypeSchemas/ActivityScalarFieldEnumSchema'
import { ActivityScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ActivityScalarWhereWithAggregatesInputSchema'

export const ActivityGroupByArgsSchema: z.ZodType<Prisma.ActivityGroupByArgs> = z.object({
  where: ActivityWhereInputSchema.optional(),
  orderBy: z.union([ ActivityOrderByWithAggregationInputSchema.array(),ActivityOrderByWithAggregationInputSchema ]).optional(),
  by: ActivityScalarFieldEnumSchema.array(),
  having: ActivityScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ActivityGroupByArgsSchema;
