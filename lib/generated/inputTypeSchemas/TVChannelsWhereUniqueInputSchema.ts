import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TVChannelsWhereInputSchema } from './TVChannelsWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { EnumTVChannelLanguagesFilterSchema } from './EnumTVChannelLanguagesFilterSchema';
import { TVChannelLanguagesSchema } from './TVChannelLanguagesSchema';
import { EnumTVCHANNELTYPEFilterSchema } from './EnumTVCHANNELTYPEFilterSchema';
import { TVCHANNELTYPESchema } from './TVCHANNELTYPESchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { HotelNullableScalarRelationFilterSchema } from './HotelNullableScalarRelationFilterSchema';
import { HotelWhereInputSchema } from './HotelWhereInputSchema';

export const TVChannelsWhereUniqueInputSchema: z.ZodType<Prisma.TVChannelsWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => TVChannelsWhereInputSchema),z.lazy(() => TVChannelsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TVChannelsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TVChannelsWhereInputSchema),z.lazy(() => TVChannelsWhereInputSchema).array() ]).optional(),
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
  Hotel: z.union([ z.lazy(() => HotelNullableScalarRelationFilterSchema),z.lazy(() => HotelWhereInputSchema) ]).optional().nullable(),
}).strict());

export default TVChannelsWhereUniqueInputSchema;
