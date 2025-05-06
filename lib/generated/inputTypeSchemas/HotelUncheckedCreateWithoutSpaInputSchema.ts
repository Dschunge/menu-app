import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { HotelCreateimagesInputSchema } from './HotelCreateimagesInputSchema';
import { HotelCreatevideosInputSchema } from './HotelCreatevideosInputSchema';
import { ActivityUncheckedCreateNestedManyWithoutHotelInputSchema } from './ActivityUncheckedCreateNestedManyWithoutHotelInputSchema';
import { TourUncheckedCreateNestedManyWithoutHotelInputSchema } from './TourUncheckedCreateNestedManyWithoutHotelInputSchema';
import { AmenitiesUncheckedCreateNestedManyWithoutHotelInputSchema } from './AmenitiesUncheckedCreateNestedManyWithoutHotelInputSchema';
import { TVChannelsUncheckedCreateNestedManyWithoutHotelInputSchema } from './TVChannelsUncheckedCreateNestedManyWithoutHotelInputSchema';

export const HotelUncheckedCreateWithoutSpaInputSchema: z.ZodType<Prisma.HotelUncheckedCreateWithoutSpaInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  description: z.string(),
  description_esp: z.string(),
  image: z.string(),
  country: z.string(),
  state: z.string(),
  city: z.string(),
  locationDescription: z.string(),
  locationDescription_esp: z.string(),
  images: z.union([ z.lazy(() => HotelCreateimagesInputSchema),z.string().array() ]).optional(),
  videos: z.union([ z.lazy(() => HotelCreatevideosInputSchema),z.string().array() ]).optional(),
  lat: z.number().int(),
  lng: z.number().int(),
  phone: z.string(),
  phone_reservation: z.string().optional().nullable(),
  phone_tollfree: z.string().optional().nullable(),
  email: z.string(),
  website: z.string().optional(),
  facebook: z.string().optional().nullable(),
  tripadvisor: z.string().optional().nullable(),
  instagram: z.string().optional().nullable(),
  youtube: z.string().optional().nullable(),
  whatsapp: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  activities: z.lazy(() => ActivityUncheckedCreateNestedManyWithoutHotelInputSchema).optional(),
  tours: z.lazy(() => TourUncheckedCreateNestedManyWithoutHotelInputSchema).optional(),
  amenities: z.lazy(() => AmenitiesUncheckedCreateNestedManyWithoutHotelInputSchema).optional(),
  tvchannels: z.lazy(() => TVChannelsUncheckedCreateNestedManyWithoutHotelInputSchema).optional()
}).strict();

export default HotelUncheckedCreateWithoutSpaInputSchema;
