import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { OpeningHoursOrderByRelevanceFieldEnumSchema } from './OpeningHoursOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const OpeningHoursOrderByRelevanceInputSchema: z.ZodType<Prisma.OpeningHoursOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => OpeningHoursOrderByRelevanceFieldEnumSchema),z.lazy(() => OpeningHoursOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default OpeningHoursOrderByRelevanceInputSchema;
