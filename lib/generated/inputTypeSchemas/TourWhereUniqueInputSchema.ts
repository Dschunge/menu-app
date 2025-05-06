import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TourWhereInputSchema } from './TourWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { TourPriceCategoryListRelationFilterSchema } from './TourPriceCategoryListRelationFilterSchema';
import { HotelScalarRelationFilterSchema } from './HotelScalarRelationFilterSchema';
import { HotelWhereInputSchema } from './HotelWhereInputSchema';

export const TourWhereUniqueInputSchema: z.ZodType<Prisma.TourWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => TourWhereInputSchema),z.lazy(() => TourWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TourWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TourWhereInputSchema),z.lazy(() => TourWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name_esp: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description_esp: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  image: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  hotelId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  price: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  priceKids: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  category: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  offer: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  discount: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  whattobring: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  included: z.lazy(() => StringNullableListFilterSchema).optional(),
  pickuptime: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  maxPeople: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  minPeople: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  minAge: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  bestSeller: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  priceInfo: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  location: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  offered: z.lazy(() => StringNullableListFilterSchema).optional(),
  duration: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  videos: z.lazy(() => StringNullableListFilterSchema).optional(),
  images: z.lazy(() => StringNullableListFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  pricecategory: z.lazy(() => TourPriceCategoryListRelationFilterSchema).optional(),
  Hotel: z.union([ z.lazy(() => HotelScalarRelationFilterSchema),z.lazy(() => HotelWhereInputSchema) ]).optional(),
}).strict());

export default TourWhereUniqueInputSchema;
