import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TourCreateincludedInputSchema } from './TourCreateincludedInputSchema';
import { TourCreateofferedInputSchema } from './TourCreateofferedInputSchema';
import { TourCreatevideosInputSchema } from './TourCreatevideosInputSchema';
import { TourCreateimagesInputSchema } from './TourCreateimagesInputSchema';
import { TourPriceCategoryUncheckedCreateNestedManyWithoutTourInputSchema } from './TourPriceCategoryUncheckedCreateNestedManyWithoutTourInputSchema';

export const TourUncheckedCreateInputSchema: z.ZodType<Prisma.TourUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string().optional(),
  name_esp: z.string().optional(),
  description: z.string().optional(),
  description_esp: z.string().optional(),
  image: z.string().optional(),
  hotelId: z.string().optional(),
  price: z.number().int(),
  priceKids: z.number().int().optional(),
  category: z.string().optional(),
  offer: z.boolean().optional(),
  discount: z.number().int().optional(),
  whattobring: z.string().optional(),
  included: z.union([ z.lazy(() => TourCreateincludedInputSchema),z.string().array() ]).optional(),
  pickuptime: z.coerce.date(),
  maxPeople: z.number().int().optional(),
  minPeople: z.number().int().optional(),
  minAge: z.number().int().optional(),
  bestSeller: z.boolean().optional(),
  priceInfo: z.string().optional(),
  location: z.string().optional(),
  offered: z.union([ z.lazy(() => TourCreateofferedInputSchema),z.string().array() ]).optional(),
  duration: z.number().int().optional(),
  videos: z.union([ z.lazy(() => TourCreatevideosInputSchema),z.string().array() ]).optional(),
  images: z.union([ z.lazy(() => TourCreateimagesInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  pricecategory: z.lazy(() => TourPriceCategoryUncheckedCreateNestedManyWithoutTourInputSchema).optional()
}).strict();

export default TourUncheckedCreateInputSchema;
