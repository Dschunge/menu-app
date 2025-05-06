import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ReservationCreateNestedManyWithoutTableInputSchema } from './ReservationCreateNestedManyWithoutTableInputSchema';

export const TableCreateWithoutRestaurantInputSchema: z.ZodType<Prisma.TableCreateWithoutRestaurantInput> = z.object({
  id: z.string().uuid().optional(),
  number: z.number().int(),
  capacity: z.number().int(),
  location: z.string().optional().nullable(),
  isActive: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  reservations: z.lazy(() => ReservationCreateNestedManyWithoutTableInputSchema).optional()
}).strict();

export default TableCreateWithoutRestaurantInputSchema;
