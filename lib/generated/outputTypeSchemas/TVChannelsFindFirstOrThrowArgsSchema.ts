import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TVChannelsIncludeSchema } from '../inputTypeSchemas/TVChannelsIncludeSchema'
import { TVChannelsWhereInputSchema } from '../inputTypeSchemas/TVChannelsWhereInputSchema'
import { TVChannelsOrderByWithRelationInputSchema } from '../inputTypeSchemas/TVChannelsOrderByWithRelationInputSchema'
import { TVChannelsWhereUniqueInputSchema } from '../inputTypeSchemas/TVChannelsWhereUniqueInputSchema'
import { TVChannelsScalarFieldEnumSchema } from '../inputTypeSchemas/TVChannelsScalarFieldEnumSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { HotelArgsSchema } from "../outputTypeSchemas/HotelArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TVChannelsSelectSchema: z.ZodType<Prisma.TVChannelsSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  name_esp: z.boolean().optional(),
  description: z.boolean().optional(),
  description_esp: z.boolean().optional(),
  logo: z.boolean().optional(),
  channelNo: z.boolean().optional(),
  languages: z.boolean().optional(),
  channeltype: z.boolean().optional(),
  category: z.boolean().optional(),
  hotelId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  Hotel: z.union([z.boolean(),z.lazy(() => HotelArgsSchema)]).optional(),
}).strict()

export const TVChannelsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TVChannelsFindFirstOrThrowArgs> = z.object({
  select: TVChannelsSelectSchema.optional(),
  include: z.lazy(() => TVChannelsIncludeSchema).optional(),
  where: TVChannelsWhereInputSchema.optional(),
  orderBy: z.union([ TVChannelsOrderByWithRelationInputSchema.array(),TVChannelsOrderByWithRelationInputSchema ]).optional(),
  cursor: TVChannelsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TVChannelsScalarFieldEnumSchema,TVChannelsScalarFieldEnumSchema.array() ]).optional(),
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export default TVChannelsFindFirstOrThrowArgsSchema;
