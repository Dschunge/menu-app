import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { AmenitiesWhereInputSchema } from './AmenitiesWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumAMENITIESTYPEFilterSchema } from './EnumAMENITIESTYPEFilterSchema';
import { AMENITIESTYPESchema } from './AMENITIESTYPESchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { HotelNullableScalarRelationFilterSchema } from './HotelNullableScalarRelationFilterSchema';
import { HotelWhereInputSchema } from './HotelWhereInputSchema';

export const AmenitiesWhereUniqueInputSchema: z.ZodType<Prisma.AmenitiesWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => AmenitiesWhereInputSchema),z.lazy(() => AmenitiesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AmenitiesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AmenitiesWhereInputSchema),z.lazy(() => AmenitiesWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  icon: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  image: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  amenitiestype: z.union([ z.lazy(() => EnumAMENITIESTYPEFilterSchema),z.lazy(() => AMENITIESTYPESchema) ]).optional(),
  hotelId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Hotel: z.union([ z.lazy(() => HotelNullableScalarRelationFilterSchema),z.lazy(() => HotelWhereInputSchema) ]).optional().nullable(),
}).strict());

export default AmenitiesWhereUniqueInputSchema;
