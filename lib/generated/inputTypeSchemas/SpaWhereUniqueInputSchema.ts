import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SpaWhereInputSchema } from './SpaWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { SpaPriceCategoryListRelationFilterSchema } from './SpaPriceCategoryListRelationFilterSchema';
import { HotelNullableScalarRelationFilterSchema } from './HotelNullableScalarRelationFilterSchema';
import { HotelWhereInputSchema } from './HotelWhereInputSchema';

export const SpaWhereUniqueInputSchema: z.ZodType<Prisma.SpaWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => SpaWhereInputSchema),z.lazy(() => SpaWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SpaWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SpaWhereInputSchema),z.lazy(() => SpaWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name_esp: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description_esp: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  hotelId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  videos: z.lazy(() => StringNullableListFilterSchema).optional(),
  images: z.lazy(() => StringNullableListFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  pricecategory: z.lazy(() => SpaPriceCategoryListRelationFilterSchema).optional(),
  Hotel: z.union([ z.lazy(() => HotelNullableScalarRelationFilterSchema),z.lazy(() => HotelWhereInputSchema) ]).optional().nullable(),
}).strict());

export default SpaWhereUniqueInputSchema;
