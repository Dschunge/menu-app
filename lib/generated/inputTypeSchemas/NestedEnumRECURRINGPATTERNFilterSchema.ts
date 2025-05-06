import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { RECURRINGPATTERNSchema } from './RECURRINGPATTERNSchema';

export const NestedEnumRECURRINGPATTERNFilterSchema: z.ZodType<Prisma.NestedEnumRECURRINGPATTERNFilter> = z.object({
  equals: z.lazy(() => RECURRINGPATTERNSchema).optional(),
  in: z.lazy(() => RECURRINGPATTERNSchema).array().optional(),
  notIn: z.lazy(() => RECURRINGPATTERNSchema).array().optional(),
  not: z.union([ z.lazy(() => RECURRINGPATTERNSchema),z.lazy(() => NestedEnumRECURRINGPATTERNFilterSchema) ]).optional(),
}).strict();

export default NestedEnumRECURRINGPATTERNFilterSchema;
