import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { HotelWhereInputSchema } from './HotelWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { ActivityListRelationFilterSchema } from './ActivityListRelationFilterSchema';
import { TourListRelationFilterSchema } from './TourListRelationFilterSchema';
import { SpaListRelationFilterSchema } from './SpaListRelationFilterSchema';
import { AmenitiesListRelationFilterSchema } from './AmenitiesListRelationFilterSchema';
import { TVChannelsListRelationFilterSchema } from './TVChannelsListRelationFilterSchema';

export const HotelWhereUniqueInputSchema: z.ZodType<Prisma.HotelWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => HotelWhereInputSchema),z.lazy(() => HotelWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => HotelWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HotelWhereInputSchema),z.lazy(() => HotelWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description_esp: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  image: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  country: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  state: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  city: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  locationDescription: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  locationDescription_esp: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  images: z.lazy(() => StringNullableListFilterSchema).optional(),
  videos: z.lazy(() => StringNullableListFilterSchema).optional(),
  lat: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  lng: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  phone: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  phone_reservation: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  phone_tollfree: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  website: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  facebook: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  tripadvisor: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  instagram: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  youtube: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  whatsapp: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  activities: z.lazy(() => ActivityListRelationFilterSchema).optional(),
  tours: z.lazy(() => TourListRelationFilterSchema).optional(),
  spa: z.lazy(() => SpaListRelationFilterSchema).optional(),
  amenities: z.lazy(() => AmenitiesListRelationFilterSchema).optional(),
  tvchannels: z.lazy(() => TVChannelsListRelationFilterSchema).optional()
}).strict());

export default HotelWhereUniqueInputSchema;
