import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SubSubcategoryOrderByRelevanceFieldEnumSchema } from './SubSubcategoryOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const SubSubcategoryOrderByRelevanceInputSchema: z.ZodType<Prisma.SubSubcategoryOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => SubSubcategoryOrderByRelevanceFieldEnumSchema),z.lazy(() => SubSubcategoryOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default SubSubcategoryOrderByRelevanceInputSchema;
