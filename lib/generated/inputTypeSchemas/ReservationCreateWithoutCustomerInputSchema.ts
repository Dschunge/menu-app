import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ReservationStatusSchema } from './ReservationStatusSchema';
import { TableCreateNestedOneWithoutReservationsInputSchema } from './TableCreateNestedOneWithoutReservationsInputSchema';
import { RestaurantCreateNestedOneWithoutReservationsInputSchema } from './RestaurantCreateNestedOneWithoutReservationsInputSchema';

export const ReservationCreateWithoutCustomerInputSchema: z.ZodType<Prisma.ReservationCreateWithoutCustomerInput> = z.object({
  id: z.string().uuid().optional(),
  date: z.coerce.date(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  partySize: z.number().int(),
  status: z.lazy(() => ReservationStatusSchema).optional(),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  table: z.lazy(() => TableCreateNestedOneWithoutReservationsInputSchema).optional(),
  restaurant: z.lazy(() => RestaurantCreateNestedOneWithoutReservationsInputSchema)
}).strict();

export default ReservationCreateWithoutCustomerInputSchema;
