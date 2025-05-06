import { z } from 'zod';
import { ReservationStatusSchema } from '../inputTypeSchemas/ReservationStatusSchema'

/////////////////////////////////////////
// RESERVATION SCHEMA
/////////////////////////////////////////

export const ReservationSchema = z.object({
  status: ReservationStatusSchema,
  id: z.string().uuid(),
  date: z.coerce.date(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  partySize: z.number().int(),
  notes: z.string().nullable(),
  customerId: z.string(),
  tableId: z.string().nullable(),
  restaurantId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Reservation = z.infer<typeof ReservationSchema>

export default ReservationSchema;
