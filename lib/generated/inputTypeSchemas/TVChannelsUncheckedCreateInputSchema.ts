import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TVChannelLanguagesSchema } from './TVChannelLanguagesSchema';
import { TVCHANNELTYPESchema } from './TVCHANNELTYPESchema';

export const TVChannelsUncheckedCreateInputSchema: z.ZodType<Prisma.TVChannelsUncheckedCreateInput> = z.object({
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
  hotelId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default TVChannelsUncheckedCreateInputSchema;
