import type { Prisma } from '../../prisma/client';

import { z } from 'zod';

export const TableCreateManyRestaurantInputSchema: z.ZodType<Prisma.TableCreateManyRestaurantInput> = z.object({
  id: z.string().uuid().optional(),
  number: z.number().int(),
  capacity: z.number().int(),
  location: z.string().optional().nullable(),
  isActive: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default TableCreateManyRestaurantInputSchema;
