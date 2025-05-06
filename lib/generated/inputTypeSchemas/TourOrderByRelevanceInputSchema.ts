import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TourOrderByRelevanceFieldEnumSchema } from './TourOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const TourOrderByRelevanceInputSchema: z.ZodType<Prisma.TourOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => TourOrderByRelevanceFieldEnumSchema),z.lazy(() => TourOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default TourOrderByRelevanceInputSchema;
