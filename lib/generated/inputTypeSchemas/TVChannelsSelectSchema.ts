import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { HotelArgsSchema } from "../outputTypeSchemas/HotelArgsSchema"

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

export default TVChannelsSelectSchema;
