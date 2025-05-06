import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SpaPriceCategoryOrderByRelevanceFieldEnumSchema } from './SpaPriceCategoryOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const SpaPriceCategoryOrderByRelevanceInputSchema: z.ZodType<Prisma.SpaPriceCategoryOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => SpaPriceCategoryOrderByRelevanceFieldEnumSchema),z.lazy(() => SpaPriceCategoryOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default SpaPriceCategoryOrderByRelevanceInputSchema;
