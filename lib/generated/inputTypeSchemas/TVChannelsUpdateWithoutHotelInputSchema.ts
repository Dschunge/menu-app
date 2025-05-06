import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { TVChannelLanguagesSchema } from './TVChannelLanguagesSchema';
import { EnumTVChannelLanguagesFieldUpdateOperationsInputSchema } from './EnumTVChannelLanguagesFieldUpdateOperationsInputSchema';
import { TVCHANNELTYPESchema } from './TVCHANNELTYPESchema';
import { EnumTVCHANNELTYPEFieldUpdateOperationsInputSchema } from './EnumTVCHANNELTYPEFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';

export const TVChannelsUpdateWithoutHotelInputSchema: z.ZodType<Prisma.TVChannelsUpdateWithoutHotelInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name_esp: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description_esp: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  logo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  channelNo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  languages: z.union([ z.lazy(() => TVChannelLanguagesSchema),z.lazy(() => EnumTVChannelLanguagesFieldUpdateOperationsInputSchema) ]).optional(),
  channeltype: z.union([ z.lazy(() => TVCHANNELTYPESchema),z.lazy(() => EnumTVCHANNELTYPEFieldUpdateOperationsInputSchema) ]).optional(),
  category: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default TVChannelsUpdateWithoutHotelInputSchema;
