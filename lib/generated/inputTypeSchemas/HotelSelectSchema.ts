import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { ActivityFindManyArgsSchema } from "../outputTypeSchemas/ActivityFindManyArgsSchema"
import { TourFindManyArgsSchema } from "../outputTypeSchemas/TourFindManyArgsSchema"
import { SpaFindManyArgsSchema } from "../outputTypeSchemas/SpaFindManyArgsSchema"
import { AmenitiesFindManyArgsSchema } from "../outputTypeSchemas/AmenitiesFindManyArgsSchema"
import { TVChannelsFindManyArgsSchema } from "../outputTypeSchemas/TVChannelsFindManyArgsSchema"
import { HotelCountOutputTypeArgsSchema } from "../outputTypeSchemas/HotelCountOutputTypeArgsSchema"

export const HotelSelectSchema: z.ZodType<Prisma.HotelSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  description_esp: z.boolean().optional(),
  image: z.boolean().optional(),
  country: z.boolean().optional(),
  state: z.boolean().optional(),
  city: z.boolean().optional(),
  locationDescription: z.boolean().optional(),
  locationDescription_esp: z.boolean().optional(),
  images: z.boolean().optional(),
  videos: z.boolean().optional(),
  lat: z.boolean().optional(),
  lng: z.boolean().optional(),
  phone: z.boolean().optional(),
  phone_reservation: z.boolean().optional(),
  phone_tollfree: z.boolean().optional(),
  email: z.boolean().optional(),
  website: z.boolean().optional(),
  facebook: z.boolean().optional(),
  tripadvisor: z.boolean().optional(),
  instagram: z.boolean().optional(),
  youtube: z.boolean().optional(),
  whatsapp: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  activities: z.union([z.boolean(),z.lazy(() => ActivityFindManyArgsSchema)]).optional(),
  tours: z.union([z.boolean(),z.lazy(() => TourFindManyArgsSchema)]).optional(),
  spa: z.union([z.boolean(),z.lazy(() => SpaFindManyArgsSchema)]).optional(),
  amenities: z.union([z.boolean(),z.lazy(() => AmenitiesFindManyArgsSchema)]).optional(),
  tvchannels: z.union([z.boolean(),z.lazy(() => TVChannelsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => HotelCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default HotelSelectSchema;
