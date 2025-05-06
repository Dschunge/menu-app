import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TVChannelsWhereInputSchema } from '../inputTypeSchemas/TVChannelsWhereInputSchema'
import { TVChannelsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TVChannelsOrderByWithAggregationInputSchema'
import { TVChannelsScalarFieldEnumSchema } from '../inputTypeSchemas/TVChannelsScalarFieldEnumSchema'
import { TVChannelsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TVChannelsScalarWhereWithAggregatesInputSchema'

export const TVChannelsGroupByArgsSchema: z.ZodType<Prisma.TVChannelsGroupByArgs> = z.object({
  where: TVChannelsWhereInputSchema.optional(),
  orderBy: z.union([ TVChannelsOrderByWithAggregationInputSchema.array(),TVChannelsOrderByWithAggregationInputSchema ]).optional(),
  by: TVChannelsScalarFieldEnumSchema.array(),
  having: TVChannelsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default TVChannelsGroupByArgsSchema;
