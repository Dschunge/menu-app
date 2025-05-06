import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SpaCreateNestedOneWithoutPricecategoryInputSchema } from './SpaCreateNestedOneWithoutPricecategoryInputSchema';

export const SpaPriceCategoryCreateInputSchema: z.ZodType<Prisma.SpaPriceCategoryCreateInput> = z.object({
  id: z.string().uuid().optional(),
  sku: z.number().int(),
  price: z.number().int(),
  description: z.string().optional(),
  description_esp: z.string().optional(),
  duration: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  spa: z.lazy(() => SpaCreateNestedOneWithoutPricecategoryInputSchema).optional()
}).strict();

export default SpaPriceCategoryCreateInputSchema;
