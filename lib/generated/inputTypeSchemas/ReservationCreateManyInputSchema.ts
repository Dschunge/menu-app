import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ReservationStatusSchema } from './ReservationStatusSchema';

export const ReservationCreateManyInputSchema: z.ZodType<Prisma.ReservationCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  date: z.coerce.date(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  partySize: z.number().int(),
  status: z.lazy(() => ReservationStatusSchema).optional(),
  notes: z.string().optional().nullable(),
  customerId: z.string(),
  tableId: z.string().optional().nullable(),
  restaurantId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default ReservationCreateManyInputSchema;
