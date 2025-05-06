import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TVCHANNELTYPESchema } from './TVCHANNELTYPESchema';
import { NestedEnumTVCHANNELTYPEWithAggregatesFilterSchema } from './NestedEnumTVCHANNELTYPEWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumTVCHANNELTYPEFilterSchema } from './NestedEnumTVCHANNELTYPEFilterSchema';

export const EnumTVCHANNELTYPEWithAggregatesFilterSchema: z.ZodType<Prisma.EnumTVCHANNELTYPEWithAggregatesFilter> = z.object({
  equals: z.lazy(() => TVCHANNELTYPESchema).optional(),
  in: z.lazy(() => TVCHANNELTYPESchema).array().optional(),
  notIn: z.lazy(() => TVCHANNELTYPESchema).array().optional(),
  not: z.union([ z.lazy(() => TVCHANNELTYPESchema),z.lazy(() => NestedEnumTVCHANNELTYPEWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumTVCHANNELTYPEFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumTVCHANNELTYPEFilterSchema).optional()
}).strict();

export default EnumTVCHANNELTYPEWithAggregatesFilterSchema;
