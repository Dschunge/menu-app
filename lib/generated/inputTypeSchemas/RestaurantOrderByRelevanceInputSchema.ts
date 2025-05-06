import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { RestaurantOrderByRelevanceFieldEnumSchema } from './RestaurantOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const RestaurantOrderByRelevanceInputSchema: z.ZodType<Prisma.RestaurantOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => RestaurantOrderByRelevanceFieldEnumSchema),z.lazy(() => RestaurantOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default RestaurantOrderByRelevanceInputSchema;
