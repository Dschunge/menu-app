import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const TourScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TourScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TourScalarWhereWithAggregatesInputSchema),z.lazy(() => TourScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TourScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TourScalarWhereWithAggregatesInputSchema),z.lazy(() => TourScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name_esp: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description_esp: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  image: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  hotelId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  price: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  priceKids: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  category: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  offer: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  discount: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  whattobring: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  included: z.lazy(() => StringNullableListFilterSchema).optional(),
  pickuptime: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  maxPeople: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  minPeople: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  minAge: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  bestSeller: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  priceInfo: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  location: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  offered: z.lazy(() => StringNullableListFilterSchema).optional(),
  duration: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  videos: z.lazy(() => StringNullableListFilterSchema).optional(),
  images: z.lazy(() => StringNullableListFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default TourScalarWhereWithAggregatesInputSchema;
