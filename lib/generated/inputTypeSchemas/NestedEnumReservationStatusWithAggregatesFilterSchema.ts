import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ReservationStatusSchema } from './ReservationStatusSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumReservationStatusFilterSchema } from './NestedEnumReservationStatusFilterSchema';

export const NestedEnumReservationStatusWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumReservationStatusWithAggregatesFilter> = z.object({
  equals: z.lazy(() => ReservationStatusSchema).optional(),
  in: z.lazy(() => ReservationStatusSchema).array().optional(),
  notIn: z.lazy(() => ReservationStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => ReservationStatusSchema),z.lazy(() => NestedEnumReservationStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumReservationStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumReservationStatusFilterSchema).optional()
}).strict();

export default NestedEnumReservationStatusWithAggregatesFilterSchema;
