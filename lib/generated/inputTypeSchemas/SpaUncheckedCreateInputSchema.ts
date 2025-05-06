import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SpaCreatevideosInputSchema } from './SpaCreatevideosInputSchema';
import { SpaCreateimagesInputSchema } from './SpaCreateimagesInputSchema';
import { SpaPriceCategoryUncheckedCreateNestedManyWithoutSpaInputSchema } from './SpaPriceCategoryUncheckedCreateNestedManyWithoutSpaInputSchema';

export const SpaUncheckedCreateInputSchema: z.ZodType<Prisma.SpaUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string().optional(),
  name_esp: z.string().optional(),
  description: z.string().optional(),
  description_esp: z.string().optional(),
  hotelId: z.string().optional(),
  type: z.string().optional(),
  videos: z.union([ z.lazy(() => SpaCreatevideosInputSchema),z.string().array() ]).optional(),
  images: z.union([ z.lazy(() => SpaCreateimagesInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  pricecategory: z.lazy(() => SpaPriceCategoryUncheckedCreateNestedManyWithoutSpaInputSchema).optional()
}).strict();

export default SpaUncheckedCreateInputSchema;
