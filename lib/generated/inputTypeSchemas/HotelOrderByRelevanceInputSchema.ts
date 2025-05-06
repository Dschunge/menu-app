import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { HotelOrderByRelevanceFieldEnumSchema } from './HotelOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const HotelOrderByRelevanceInputSchema: z.ZodType<Prisma.HotelOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => HotelOrderByRelevanceFieldEnumSchema),z.lazy(() => HotelOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default HotelOrderByRelevanceInputSchema;
