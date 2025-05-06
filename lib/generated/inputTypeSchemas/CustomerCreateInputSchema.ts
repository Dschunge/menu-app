import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ReservationCreateNestedManyWithoutCustomerInputSchema } from './ReservationCreateNestedManyWithoutCustomerInputSchema';

export const CustomerCreateInputSchema: z.ZodType<Prisma.CustomerCreateInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  reservations: z.lazy(() => ReservationCreateNestedManyWithoutCustomerInputSchema).optional()
}).strict();

export default CustomerCreateInputSchema;
