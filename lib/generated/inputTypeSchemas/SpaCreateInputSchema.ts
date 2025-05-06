import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SpaCreatevideosInputSchema } from './SpaCreatevideosInputSchema';
import { SpaCreateimagesInputSchema } from './SpaCreateimagesInputSchema';
import { SpaPriceCategoryCreateNestedManyWithoutSpaInputSchema } from './SpaPriceCategoryCreateNestedManyWithoutSpaInputSchema';
import { HotelCreateNestedOneWithoutSpaInputSchema } from './HotelCreateNestedOneWithoutSpaInputSchema';

export const SpaCreateInputSchema: z.ZodType<Prisma.SpaCreateInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string().optional(),
  name_esp: z.string().optional(),
  description: z.string().optional(),
  description_esp: z.string().optional(),
  type: z.string().optional(),
  videos: z.union([ z.lazy(() => SpaCreatevideosInputSchema),z.string().array() ]).optional(),
  images: z.union([ z.lazy(() => SpaCreateimagesInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  pricecategory: z.lazy(() => SpaPriceCategoryCreateNestedManyWithoutSpaInputSchema).optional(),
  Hotel: z.lazy(() => HotelCreateNestedOneWithoutSpaInputSchema).optional()
}).strict();

export default SpaCreateInputSchema;
