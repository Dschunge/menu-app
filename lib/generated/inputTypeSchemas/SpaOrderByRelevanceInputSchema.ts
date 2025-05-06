import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SpaOrderByRelevanceFieldEnumSchema } from './SpaOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const SpaOrderByRelevanceInputSchema: z.ZodType<Prisma.SpaOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => SpaOrderByRelevanceFieldEnumSchema),z.lazy(() => SpaOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default SpaOrderByRelevanceInputSchema;
