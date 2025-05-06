import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ReservationStatusSchema } from './ReservationStatusSchema';
import { CustomerCreateNestedOneWithoutReservationsInputSchema } from './CustomerCreateNestedOneWithoutReservationsInputSchema';
import { RestaurantCreateNestedOneWithoutReservationsInputSchema } from './RestaurantCreateNestedOneWithoutReservationsInputSchema';

export const ReservationCreateWithoutTableInputSchema: z.ZodType<Prisma.ReservationCreateWithoutTableInput> = z.object({
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
  restaurant: z.lazy(() => RestaurantCreateNestedOneWithoutReservationsInputSchema)
}).strict();

export default ReservationCreateWithoutTableInputSchema;
