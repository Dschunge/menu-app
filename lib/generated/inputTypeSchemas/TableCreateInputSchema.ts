import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { RestaurantCreateNestedOneWithoutTablesInputSchema } from './RestaurantCreateNestedOneWithoutTablesInputSchema';
import { ReservationCreateNestedManyWithoutTableInputSchema } from './ReservationCreateNestedManyWithoutTableInputSchema';

export const TableCreateInputSchema: z.ZodType<Prisma.TableCreateInput> = z.object({
  id: z.string().uuid().optional(),
  number: z.number().int(),
  capacity: z.number().int(),
  location: z.string().optional().nullable(),
  isActive: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  restaurant: z.lazy(() => RestaurantCreateNestedOneWithoutTablesInputSchema),
  reservations: z.lazy(() => ReservationCreateNestedManyWithoutTableInputSchema).optional()
}).strict();

export default TableCreateInputSchema;
