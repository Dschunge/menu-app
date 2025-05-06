import type { Prisma } from '../../prisma/client';

import { z } from 'zod';

export const TourPriceCategoryCreateManyTourInputSchema: z.ZodType<Prisma.TourPriceCategoryCreateManyTourInput> = z.object({
  id: z.string().uuid().optional(),
  sku: z.number().int(),
  price: z.number().int(),
  description: z.string().optional(),
  description_esp: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default TourPriceCategoryCreateManyTourInputSchema;
