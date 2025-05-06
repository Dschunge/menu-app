import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TVChannelLanguagesSchema } from './TVChannelLanguagesSchema';
import { NestedEnumTVChannelLanguagesFilterSchema } from './NestedEnumTVChannelLanguagesFilterSchema';

export const EnumTVChannelLanguagesFilterSchema: z.ZodType<Prisma.EnumTVChannelLanguagesFilter> = z.object({
  equals: z.lazy(() => TVChannelLanguagesSchema).optional(),
  in: z.lazy(() => TVChannelLanguagesSchema).array().optional(),
  notIn: z.lazy(() => TVChannelLanguagesSchema).array().optional(),
  not: z.union([ z.lazy(() => TVChannelLanguagesSchema),z.lazy(() => NestedEnumTVChannelLanguagesFilterSchema) ]).optional(),
}).strict();

export default EnumTVChannelLanguagesFilterSchema;
