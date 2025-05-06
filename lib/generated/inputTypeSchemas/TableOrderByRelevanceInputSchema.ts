import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TableOrderByRelevanceFieldEnumSchema } from './TableOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const TableOrderByRelevanceInputSchema: z.ZodType<Prisma.TableOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => TableOrderByRelevanceFieldEnumSchema),z.lazy(() => TableOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default TableOrderByRelevanceInputSchema;
