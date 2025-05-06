import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ReservationOrderByRelevanceFieldEnumSchema } from './ReservationOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const ReservationOrderByRelevanceInputSchema: z.ZodType<Prisma.ReservationOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => ReservationOrderByRelevanceFieldEnumSchema),z.lazy(() => ReservationOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default ReservationOrderByRelevanceInputSchema;
