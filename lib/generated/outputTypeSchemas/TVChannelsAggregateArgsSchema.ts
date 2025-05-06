import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TVChannelsWhereInputSchema } from '../inputTypeSchemas/TVChannelsWhereInputSchema'
import { TVChannelsOrderByWithRelationInputSchema } from '../inputTypeSchemas/TVChannelsOrderByWithRelationInputSchema'
import { TVChannelsWhereUniqueInputSchema } from '../inputTypeSchemas/TVChannelsWhereUniqueInputSchema'

export const TVChannelsAggregateArgsSchema: z.ZodType<Prisma.TVChannelsAggregateArgs> = z.object({
  where: TVChannelsWhereInputSchema.optional(),
  orderBy: z.union([ TVChannelsOrderByWithRelationInputSchema.array(),TVChannelsOrderByWithRelationInputSchema ]).optional(),
  cursor: TVChannelsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default TVChannelsAggregateArgsSchema;
