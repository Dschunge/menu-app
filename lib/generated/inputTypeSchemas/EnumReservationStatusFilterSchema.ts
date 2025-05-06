import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ReservationStatusSchema } from './ReservationStatusSchema';
import { NestedEnumReservationStatusFilterSchema } from './NestedEnumReservationStatusFilterSchema';

export const EnumReservationStatusFilterSchema: z.ZodType<Prisma.EnumReservationStatusFilter> = z.object({
  equals: z.lazy(() => ReservationStatusSchema).optional(),
  in: z.lazy(() => ReservationStatusSchema).array().optional(),
  notIn: z.lazy(() => ReservationStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => ReservationStatusSchema),z.lazy(() => NestedEnumReservationStatusFilterSchema) ]).optional(),
}).strict();

export default EnumReservationStatusFilterSchema;
