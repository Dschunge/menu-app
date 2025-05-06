import type { Prisma } from '../../prisma/client';

import { z } from 'zod';

export const CustomerCreateManyInputSchema: z.ZodType<Prisma.CustomerCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default CustomerCreateManyInputSchema;
