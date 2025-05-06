import { z } from 'zod';

export const ReservationStatusSchema = z.enum(['PENDING','CONFIRMED','CANCELLED','COMPLETED','NO_SHOW']);

export type ReservationStatusType = `${z.infer<typeof ReservationStatusSchema>}`

export default ReservationStatusSchema;
