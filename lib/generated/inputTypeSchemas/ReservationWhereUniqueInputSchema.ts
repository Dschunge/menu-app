import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ReservationWhereInputSchema } from './ReservationWhereInputSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { EnumReservationStatusFilterSchema } from './EnumReservationStatusFilterSchema';
import { ReservationStatusSchema } from './ReservationStatusSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { CustomerScalarRelationFilterSchema } from './CustomerScalarRelationFilterSchema';
import { CustomerWhereInputSchema } from './CustomerWhereInputSchema';
import { TableNullableScalarRelationFilterSchema } from './TableNullableScalarRelationFilterSchema';
import { TableWhereInputSchema } from './TableWhereInputSchema';
import { RestaurantScalarRelationFilterSchema } from './RestaurantScalarRelationFilterSchema';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';

export const ReservationWhereUniqueInputSchema: z.ZodType<Prisma.ReservationWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => ReservationWhereInputSchema),z.lazy(() => ReservationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReservationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReservationWhereInputSchema),z.lazy(() => ReservationWhereInputSchema).array() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  startTime: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  endTime: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  partySize: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  status: z.union([ z.lazy(() => EnumReservationStatusFilterSchema),z.lazy(() => ReservationStatusSchema) ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  customerId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tableId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  restaurantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  customer: z.union([ z.lazy(() => CustomerScalarRelationFilterSchema),z.lazy(() => CustomerWhereInputSchema) ]).optional(),
  table: z.union([ z.lazy(() => TableNullableScalarRelationFilterSchema),z.lazy(() => TableWhereInputSchema) ]).optional().nullable(),
  restaurant: z.union([ z.lazy(() => RestaurantScalarRelationFilterSchema),z.lazy(() => RestaurantWhereInputSchema) ]).optional(),
}).strict());

export default ReservationWhereUniqueInputSchema;
