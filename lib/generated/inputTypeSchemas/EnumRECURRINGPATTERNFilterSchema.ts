import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { RECURRINGPATTERNSchema } from './RECURRINGPATTERNSchema';
import { NestedEnumRECURRINGPATTERNFilterSchema } from './NestedEnumRECURRINGPATTERNFilterSchema';

export const EnumRECURRINGPATTERNFilterSchema: z.ZodType<Prisma.EnumRECURRINGPATTERNFilter> = z.object({
  equals: z.lazy(() => RECURRINGPATTERNSchema).optional(),
  in: z.lazy(() => RECURRINGPATTERNSchema).array().optional(),
  notIn: z.lazy(() => RECURRINGPATTERNSchema).array().optional(),
  not: z.union([ z.lazy(() => RECURRINGPATTERNSchema),z.lazy(() => NestedEnumRECURRINGPATTERNFilterSchema) ]).optional(),
}).strict();

export default EnumRECURRINGPATTERNFilterSchema;
