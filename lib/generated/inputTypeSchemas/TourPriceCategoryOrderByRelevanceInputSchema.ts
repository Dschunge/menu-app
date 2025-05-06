import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TourPriceCategoryOrderByRelevanceFieldEnumSchema } from './TourPriceCategoryOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const TourPriceCategoryOrderByRelevanceInputSchema: z.ZodType<Prisma.TourPriceCategoryOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => TourPriceCategoryOrderByRelevanceFieldEnumSchema),z.lazy(() => TourPriceCategoryOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default TourPriceCategoryOrderByRelevanceInputSchema;
