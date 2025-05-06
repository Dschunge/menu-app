import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { AMENITIESTYPESchema } from './AMENITIESTYPESchema';
import { NestedEnumAMENITIESTYPEWithAggregatesFilterSchema } from './NestedEnumAMENITIESTYPEWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumAMENITIESTYPEFilterSchema } from './NestedEnumAMENITIESTYPEFilterSchema';

export const EnumAMENITIESTYPEWithAggregatesFilterSchema: z.ZodType<Prisma.EnumAMENITIESTYPEWithAggregatesFilter> = z.object({
  equals: z.lazy(() => AMENITIESTYPESchema).optional(),
  in: z.lazy(() => AMENITIESTYPESchema).array().optional(),
  notIn: z.lazy(() => AMENITIESTYPESchema).array().optional(),
  not: z.union([ z.lazy(() => AMENITIESTYPESchema),z.lazy(() => NestedEnumAMENITIESTYPEWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumAMENITIESTYPEFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumAMENITIESTYPEFilterSchema).optional()
}).strict();

export default EnumAMENITIESTYPEWithAggregatesFilterSchema;
