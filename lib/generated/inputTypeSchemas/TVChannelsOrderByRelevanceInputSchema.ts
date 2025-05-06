import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TVChannelsOrderByRelevanceFieldEnumSchema } from './TVChannelsOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const TVChannelsOrderByRelevanceInputSchema: z.ZodType<Prisma.TVChannelsOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => TVChannelsOrderByRelevanceFieldEnumSchema),z.lazy(() => TVChannelsOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default TVChannelsOrderByRelevanceInputSchema;
