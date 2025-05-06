import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ActivityOrderByRelevanceFieldEnumSchema } from './ActivityOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const ActivityOrderByRelevanceInputSchema: z.ZodType<Prisma.ActivityOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => ActivityOrderByRelevanceFieldEnumSchema),z.lazy(() => ActivityOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default ActivityOrderByRelevanceInputSchema;
