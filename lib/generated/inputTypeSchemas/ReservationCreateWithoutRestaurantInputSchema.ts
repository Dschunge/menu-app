import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ReservationStatusSchema } from './ReservationStatusSchema';
import { CustomerCreateNestedOneWithoutReservationsInputSchema } from './CustomerCreateNestedOneWithoutReservationsInputSchema';
import { TableCreateNestedOneWithoutReservationsInputSchema } from './TableCreateNestedOneWithoutReservationsInputSchema';

export const ReservationCreateWithoutRestaurantInputSchema: z.ZodType<Prisma.ReservationCreateWithoutRestaurantInput> = z.object({
  id: z.string().uuid().optional(),
  date: z.coerce.date(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  partySize: z.number().int(),
  status: z.lazy(() => ReservationStatusSchema).optional(),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  customer: z.lazy(() => CustomerCreateNestedOneWithoutReservationsInputSchema),
  table: z.lazy(() => TableCreateNestedOneWithoutReservationsInputSchema).optional()
}).strict();

export default ReservationCreateWithoutRestaurantInputSchema;
