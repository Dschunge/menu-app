import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ReservationUncheckedCreateNestedManyWithoutTableInputSchema } from './ReservationUncheckedCreateNestedManyWithoutTableInputSchema';

export const TableUncheckedCreateWithoutRestaurantInputSchema: z.ZodType<Prisma.TableUncheckedCreateWithoutRestaurantInput> = z.object({
  id: z.string().uuid().optional(),
  number: z.number().int(),
  capacity: z.number().int(),
  location: z.string().optional().nullable(),
  isActive: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  reservations: z.lazy(() => ReservationUncheckedCreateNestedManyWithoutTableInputSchema).optional()
}).strict();

export default TableUncheckedCreateWithoutRestaurantInputSchema;
