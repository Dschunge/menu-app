import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TVChannelsIncludeSchema } from '../inputTypeSchemas/TVChannelsIncludeSchema'
import { TVChannelsCreateInputSchema } from '../inputTypeSchemas/TVChannelsCreateInputSchema'
import { TVChannelsUncheckedCreateInputSchema } from '../inputTypeSchemas/TVChannelsUncheckedCreateInputSchema'
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

export const TVChannelsCreateArgsSchema: z.ZodType<Prisma.TVChannelsCreateArgs> = z.object({
  select: TVChannelsSelectSchema.optional(),
  include: z.lazy(() => TVChannelsIncludeSchema).optional(),
  data: z.union([ TVChannelsCreateInputSchema,TVChannelsUncheckedCreateInputSchema ]),
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export default TVChannelsCreateArgsSchema;
