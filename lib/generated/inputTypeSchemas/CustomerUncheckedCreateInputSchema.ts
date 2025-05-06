import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ReservationUncheckedCreateNestedManyWithoutCustomerInputSchema } from './ReservationUncheckedCreateNestedManyWithoutCustomerInputSchema';

export const CustomerUncheckedCreateInputSchema: z.ZodType<Prisma.CustomerUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  reservations: z.lazy(() => ReservationUncheckedCreateNestedManyWithoutCustomerInputSchema).optional()
}).strict();

export default CustomerUncheckedCreateInputSchema;
