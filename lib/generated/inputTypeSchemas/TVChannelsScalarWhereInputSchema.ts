import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { EnumTVChannelLanguagesFilterSchema } from './EnumTVChannelLanguagesFilterSchema';
import { TVChannelLanguagesSchema } from './TVChannelLanguagesSchema';
import { EnumTVCHANNELTYPEFilterSchema } from './EnumTVCHANNELTYPEFilterSchema';
import { TVCHANNELTYPESchema } from './TVCHANNELTYPESchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const TVChannelsScalarWhereInputSchema: z.ZodType<Prisma.TVChannelsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TVChannelsScalarWhereInputSchema),z.lazy(() => TVChannelsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TVChannelsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TVChannelsScalarWhereInputSchema),z.lazy(() => TVChannelsScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name_esp: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description_esp: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  logo: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  channelNo: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  languages: z.union([ z.lazy(() => EnumTVChannelLanguagesFilterSchema),z.lazy(() => TVChannelLanguagesSchema) ]).optional(),
  channeltype: z.union([ z.lazy(() => EnumTVCHANNELTYPEFilterSchema),z.lazy(() => TVCHANNELTYPESchema) ]).optional(),
  category: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  hotelId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default TVChannelsScalarWhereInputSchema;
