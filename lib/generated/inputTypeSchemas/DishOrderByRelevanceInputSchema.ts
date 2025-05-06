import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { DishOrderByRelevanceFieldEnumSchema } from './DishOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const DishOrderByRelevanceInputSchema: z.ZodType<Prisma.DishOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => DishOrderByRelevanceFieldEnumSchema),z.lazy(() => DishOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default DishOrderByRelevanceInputSchema;
