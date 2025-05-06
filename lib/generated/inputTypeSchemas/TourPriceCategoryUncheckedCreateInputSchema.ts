import type { Prisma } from '../../prisma/client';

import { z } from 'zod';

export const TourPriceCategoryUncheckedCreateInputSchema: z.ZodType<Prisma.TourPriceCategoryUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  sku: z.number().int(),
  price: z.number().int(),
  description: z.string().optional(),
  description_esp: z.string().optional(),
  tourId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default TourPriceCategoryUncheckedCreateInputSchema;
