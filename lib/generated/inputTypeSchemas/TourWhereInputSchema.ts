import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { TourPriceCategoryListRelationFilterSchema } from './TourPriceCategoryListRelationFilterSchema';
import { HotelScalarRelationFilterSchema } from './HotelScalarRelationFilterSchema';
import { HotelWhereInputSchema } from './HotelWhereInputSchema';

export const TourWhereInputSchema: z.ZodType<Prisma.TourWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TourWhereInputSchema),z.lazy(() => TourWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TourWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TourWhereInputSchema),z.lazy(() => TourWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name_esp: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description_esp: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  image: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  hotelId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  price: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  priceKids: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  category: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  offer: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  discount: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  whattobring: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  included: z.lazy(() => StringNullableListFilterSchema).optional(),
  pickuptime: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  maxPeople: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  minPeople: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  minAge: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  bestSeller: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  priceInfo: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  location: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  offered: z.lazy(() => StringNullableListFilterSchema).optional(),
  duration: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  videos: z.lazy(() => StringNullableListFilterSchema).optional(),
  images: z.lazy(() => StringNullableListFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  pricecategory: z.lazy(() => TourPriceCategoryListRelationFilterSchema).optional(),
  Hotel: z.union([ z.lazy(() => HotelScalarRelationFilterSchema),z.lazy(() => HotelWhereInputSchema) ]).optional(),
}).strict();

export default TourWhereInputSchema;
