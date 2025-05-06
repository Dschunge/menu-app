import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TVCHANNELTYPESchema } from './TVCHANNELTYPESchema';

export const NestedEnumTVCHANNELTYPEFilterSchema: z.ZodType<Prisma.NestedEnumTVCHANNELTYPEFilter> = z.object({
  equals: z.lazy(() => TVCHANNELTYPESchema).optional(),
  in: z.lazy(() => TVCHANNELTYPESchema).array().optional(),
  notIn: z.lazy(() => TVCHANNELTYPESchema).array().optional(),
  not: z.union([ z.lazy(() => TVCHANNELTYPESchema),z.lazy(() => NestedEnumTVCHANNELTYPEFilterSchema) ]).optional(),
}).strict();

export default NestedEnumTVCHANNELTYPEFilterSchema;
