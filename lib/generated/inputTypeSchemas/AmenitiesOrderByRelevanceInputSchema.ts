import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { AmenitiesOrderByRelevanceFieldEnumSchema } from './AmenitiesOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const AmenitiesOrderByRelevanceInputSchema: z.ZodType<Prisma.AmenitiesOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => AmenitiesOrderByRelevanceFieldEnumSchema),z.lazy(() => AmenitiesOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default AmenitiesOrderByRelevanceInputSchema;
