import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TVChannelsIncludeSchema } from '../inputTypeSchemas/TVChannelsIncludeSchema'
import { TVChannelsWhereUniqueInputSchema } from '../inputTypeSchemas/TVChannelsWhereUniqueInputSchema'
import { TVChannelsCreateInputSchema } from '../inputTypeSchemas/TVChannelsCreateInputSchema'
import { TVChannelsUncheckedCreateInputSchema } from '../inputTypeSchemas/TVChannelsUncheckedCreateInputSchema'
import { TVChannelsUpdateInputSchema } from '../inputTypeSchemas/TVChannelsUpdateInputSchema'
import { TVChannelsUncheckedUpdateInputSchema } from '../inputTypeSchemas/TVChannelsUncheckedUpdateInputSchema'
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

export const TVChannelsUpsertArgsSchema: z.ZodType<Prisma.TVChannelsUpsertArgs> = z.object({
  select: TVChannelsSelectSchema.optional(),
  include: z.lazy(() => TVChannelsIncludeSchema).optional(),
  where: TVChannelsWhereUniqueInputSchema,
  create: z.union([ TVChannelsCreateInputSchema,TVChannelsUncheckedCreateInputSchema ]),
  update: z.union([ TVChannelsUpdateInputSchema,TVChannelsUncheckedUpdateInputSchema ]),
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export default TVChannelsUpsertArgsSchema;
