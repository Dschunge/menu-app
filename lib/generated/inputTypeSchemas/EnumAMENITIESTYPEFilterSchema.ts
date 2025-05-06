import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { AMENITIESTYPESchema } from './AMENITIESTYPESchema';
import { NestedEnumAMENITIESTYPEFilterSchema } from './NestedEnumAMENITIESTYPEFilterSchema';

export const EnumAMENITIESTYPEFilterSchema: z.ZodType<Prisma.EnumAMENITIESTYPEFilter> = z.object({
  equals: z.lazy(() => AMENITIESTYPESchema).optional(),
  in: z.lazy(() => AMENITIESTYPESchema).array().optional(),
  notIn: z.lazy(() => AMENITIESTYPESchema).array().optional(),
  not: z.union([ z.lazy(() => AMENITIESTYPESchema),z.lazy(() => NestedEnumAMENITIESTYPEFilterSchema) ]).optional(),
}).strict();

export default EnumAMENITIESTYPEFilterSchema;
