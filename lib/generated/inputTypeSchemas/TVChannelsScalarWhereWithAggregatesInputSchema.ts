import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { EnumTVChannelLanguagesWithAggregatesFilterSchema } from './EnumTVChannelLanguagesWithAggregatesFilterSchema';
import { TVChannelLanguagesSchema } from './TVChannelLanguagesSchema';
import { EnumTVCHANNELTYPEWithAggregatesFilterSchema } from './EnumTVCHANNELTYPEWithAggregatesFilterSchema';
import { TVCHANNELTYPESchema } from './TVCHANNELTYPESchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const TVChannelsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TVChannelsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TVChannelsScalarWhereWithAggregatesInputSchema),z.lazy(() => TVChannelsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TVChannelsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TVChannelsScalarWhereWithAggregatesInputSchema),z.lazy(() => TVChannelsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name_esp: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description_esp: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  logo: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  channelNo: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  languages: z.union([ z.lazy(() => EnumTVChannelLanguagesWithAggregatesFilterSchema),z.lazy(() => TVChannelLanguagesSchema) ]).optional(),
  channeltype: z.union([ z.lazy(() => EnumTVCHANNELTYPEWithAggregatesFilterSchema),z.lazy(() => TVCHANNELTYPESchema) ]).optional(),
  category: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  hotelId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default TVChannelsScalarWhereWithAggregatesInputSchema;
