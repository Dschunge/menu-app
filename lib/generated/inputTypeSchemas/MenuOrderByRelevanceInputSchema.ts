import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { MenuOrderByRelevanceFieldEnumSchema } from './MenuOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const MenuOrderByRelevanceInputSchema: z.ZodType<Prisma.MenuOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => MenuOrderByRelevanceFieldEnumSchema),z.lazy(() => MenuOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default MenuOrderByRelevanceInputSchema;
