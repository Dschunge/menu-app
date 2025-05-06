import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TVChannelLanguagesSchema } from './TVChannelLanguagesSchema';
import { TVCHANNELTYPESchema } from './TVCHANNELTYPESchema';

export const TVChannelsCreateWithoutHotelInputSchema: z.ZodType<Prisma.TVChannelsCreateWithoutHotelInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  name_esp: z.string().optional().nullable(),
  description: z.string(),
  description_esp: z.string().optional().nullable(),
  logo: z.string().optional().nullable(),
  channelNo: z.string(),
  languages: z.lazy(() => TVChannelLanguagesSchema).optional(),
  channeltype: z.lazy(() => TVCHANNELTYPESchema).optional(),
  category: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default TVChannelsCreateWithoutHotelInputSchema;
