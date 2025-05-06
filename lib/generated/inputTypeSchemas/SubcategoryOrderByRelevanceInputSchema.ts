import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SubcategoryOrderByRelevanceFieldEnumSchema } from './SubcategoryOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const SubcategoryOrderByRelevanceInputSchema: z.ZodType<Prisma.SubcategoryOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => SubcategoryOrderByRelevanceFieldEnumSchema),z.lazy(() => SubcategoryOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default SubcategoryOrderByRelevanceInputSchema;
