import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const TourScalarWhereInputSchema: z.ZodType<Prisma.TourScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TourScalarWhereInputSchema),z.lazy(() => TourScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TourScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TourScalarWhereInputSchema),z.lazy(() => TourScalarWhereInputSchema).array() ]).optional(),
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
}).strict();

export default TourScalarWhereInputSchema;
