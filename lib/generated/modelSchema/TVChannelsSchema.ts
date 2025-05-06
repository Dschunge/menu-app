import { z } from 'zod';
import { TVChannelLanguagesSchema } from '../inputTypeSchemas/TVChannelLanguagesSchema'
import { TVCHANNELTYPESchema } from '../inputTypeSchemas/TVCHANNELTYPESchema'

/////////////////////////////////////////
// TV CHANNELS SCHEMA
/////////////////////////////////////////

export const TVChannelsSchema = z.object({
  languages: TVChannelLanguagesSchema,
  channeltype: TVCHANNELTYPESchema,
  id: z.string().uuid(),
  name: z.string(),
  name_esp: z.string().nullable(),
  description: z.string(),
  description_esp: z.string().nullable(),
  logo: z.string().nullable(),
  channelNo: z.string(),
  category: z.string(),
  hotelId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type TVChannels = z.infer<typeof TVChannelsSchema>

export default TVChannelsSchema;
