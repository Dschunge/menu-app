import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ReservationStatusSchema } from './ReservationStatusSchema';
import { NestedEnumReservationStatusWithAggregatesFilterSchema } from './NestedEnumReservationStatusWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumReservationStatusFilterSchema } from './NestedEnumReservationStatusFilterSchema';

export const EnumReservationStatusWithAggregatesFilterSchema: z.ZodType<Prisma.EnumReservationStatusWithAggregatesFilter> = z.object({
  equals: z.lazy(() => ReservationStatusSchema).optional(),
  in: z.lazy(() => ReservationStatusSchema).array().optional(),
  notIn: z.lazy(() => ReservationStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => ReservationStatusSchema),z.lazy(() => NestedEnumReservationStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumReservationStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumReservationStatusFilterSchema).optional()
}).strict();

export default EnumReservationStatusWithAggregatesFilterSchema;
