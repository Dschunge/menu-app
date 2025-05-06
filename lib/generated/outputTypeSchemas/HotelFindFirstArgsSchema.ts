import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { HotelIncludeSchema } from '../inputTypeSchemas/HotelIncludeSchema'
import { HotelWhereInputSchema } from '../inputTypeSchemas/HotelWhereInputSchema'
import { HotelOrderByWithRelationInputSchema } from '../inputTypeSchemas/HotelOrderByWithRelationInputSchema'
import { HotelWhereUniqueInputSchema } from '../inputTypeSchemas/HotelWhereUniqueInputSchema'
import { HotelScalarFieldEnumSchema } from '../inputTypeSchemas/HotelScalarFieldEnumSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { ActivityFindManyArgsSchema } from "../outputTypeSchemas/ActivityFindManyArgsSchema"
import { TourFindManyArgsSchema } from "../outputTypeSchemas/TourFindManyArgsSchema"
import { SpaFindManyArgsSchema } from "../outputTypeSchemas/SpaFindManyArgsSchema"
import { AmenitiesFindManyArgsSchema } from "../outputTypeSchemas/AmenitiesFindManyArgsSchema"
import { TVChannelsFindManyArgsSchema } from "../outputTypeSchemas/TVChannelsFindManyArgsSchema"
import { HotelCountOutputTypeArgsSchema } from "../outputTypeSchemas/HotelCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const HotelFindFirstArgsSchema: z.ZodType<Prisma.HotelFindFirstArgs> = z.object({
  select: HotelSelectSchema.optional(),
  include: z.lazy(() => HotelIncludeSchema).optional(),
  where: HotelWhereInputSchema.optional(),
  orderBy: z.union([ HotelOrderByWithRelationInputSchema.array(),HotelOrderByWithRelationInputSchema ]).optional(),
  cursor: HotelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ HotelScalarFieldEnumSchema,HotelScalarFieldEnumSchema.array() ]).optional(),
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export default HotelFindFirstArgsSchema;
