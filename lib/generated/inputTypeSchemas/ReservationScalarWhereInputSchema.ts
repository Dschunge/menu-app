import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { EnumReservationStatusFilterSchema } from './EnumReservationStatusFilterSchema';
import { ReservationStatusSchema } from './ReservationStatusSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const ReservationScalarWhereInputSchema: z.ZodType<Prisma.ReservationScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ReservationScalarWhereInputSchema),z.lazy(() => ReservationScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReservationScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReservationScalarWhereInputSchema),z.lazy(() => ReservationScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  startTime: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  endTime: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  partySize: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  status: z.union([ z.lazy(() => EnumReservationStatusFilterSchema),z.lazy(() => ReservationStatusSchema) ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  customerId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tableId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  restaurantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default ReservationScalarWhereInputSchema;
