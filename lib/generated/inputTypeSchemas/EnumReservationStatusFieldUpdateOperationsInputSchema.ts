import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ReservationStatusSchema } from './ReservationStatusSchema';

export const EnumReservationStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumReservationStatusFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => ReservationStatusSchema).optional()
}).strict();

export default EnumReservationStatusFieldUpdateOperationsInputSchema;
