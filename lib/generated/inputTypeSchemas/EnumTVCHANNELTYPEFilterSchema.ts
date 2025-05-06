import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TVCHANNELTYPESchema } from './TVCHANNELTYPESchema';
import { NestedEnumTVCHANNELTYPEFilterSchema } from './NestedEnumTVCHANNELTYPEFilterSchema';

export const EnumTVCHANNELTYPEFilterSchema: z.ZodType<Prisma.EnumTVCHANNELTYPEFilter> = z.object({
  equals: z.lazy(() => TVCHANNELTYPESchema).optional(),
  in: z.lazy(() => TVCHANNELTYPESchema).array().optional(),
  notIn: z.lazy(() => TVCHANNELTYPESchema).array().optional(),
  not: z.union([ z.lazy(() => TVCHANNELTYPESchema),z.lazy(() => NestedEnumTVCHANNELTYPEFilterSchema) ]).optional(),
}).strict();

export default EnumTVCHANNELTYPEFilterSchema;
