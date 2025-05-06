import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TVChannelLanguagesSchema } from './TVChannelLanguagesSchema';
import { NestedEnumTVChannelLanguagesWithAggregatesFilterSchema } from './NestedEnumTVChannelLanguagesWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumTVChannelLanguagesFilterSchema } from './NestedEnumTVChannelLanguagesFilterSchema';

export const EnumTVChannelLanguagesWithAggregatesFilterSchema: z.ZodType<Prisma.EnumTVChannelLanguagesWithAggregatesFilter> = z.object({
  equals: z.lazy(() => TVChannelLanguagesSchema).optional(),
  in: z.lazy(() => TVChannelLanguagesSchema).array().optional(),
  notIn: z.lazy(() => TVChannelLanguagesSchema).array().optional(),
  not: z.union([ z.lazy(() => TVChannelLanguagesSchema),z.lazy(() => NestedEnumTVChannelLanguagesWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumTVChannelLanguagesFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumTVChannelLanguagesFilterSchema).optional()
}).strict();

export default EnumTVChannelLanguagesWithAggregatesFilterSchema;
