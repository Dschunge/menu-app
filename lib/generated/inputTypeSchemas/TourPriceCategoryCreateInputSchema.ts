import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TourCreateNestedOneWithoutPricecategoryInputSchema } from './TourCreateNestedOneWithoutPricecategoryInputSchema';

export const TourPriceCategoryCreateInputSchema: z.ZodType<Prisma.TourPriceCategoryCreateInput> = z.object({
  id: z.string().uuid().optional(),
  sku: z.number().int(),
  price: z.number().int(),
  description: z.string().optional(),
  description_esp: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Tour: z.lazy(() => TourCreateNestedOneWithoutPricecategoryInputSchema).optional()
}).strict();

export default TourPriceCategoryCreateInputSchema;
