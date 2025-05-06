import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { RECURRINGPATTERNSchema } from './RECURRINGPATTERNSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumRECURRINGPATTERNFilterSchema } from './NestedEnumRECURRINGPATTERNFilterSchema';

export const NestedEnumRECURRINGPATTERNWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumRECURRINGPATTERNWithAggregatesFilter> = z.object({
  equals: z.lazy(() => RECURRINGPATTERNSchema).optional(),
  in: z.lazy(() => RECURRINGPATTERNSchema).array().optional(),
  notIn: z.lazy(() => RECURRINGPATTERNSchema).array().optional(),
  not: z.union([ z.lazy(() => RECURRINGPATTERNSchema),z.lazy(() => NestedEnumRECURRINGPATTERNWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumRECURRINGPATTERNFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumRECURRINGPATTERNFilterSchema).optional()
}).strict();

export default NestedEnumRECURRINGPATTERNWithAggregatesFilterSchema;
