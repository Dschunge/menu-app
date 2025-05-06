import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TourIncludeSchema } from '../inputTypeSchemas/TourIncludeSchema'
import { TourWhereUniqueInputSchema } from '../inputTypeSchemas/TourWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { TourPriceCategoryFindManyArgsSchema } from "../outputTypeSchemas/TourPriceCategoryFindManyArgsSchema"
import { HotelArgsSchema } from "../outputTypeSchemas/HotelArgsSchema"
import { TourCountOutputTypeArgsSchema } from "../outputTypeSchemas/TourCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TourSelectSchema: z.ZodType<Prisma.TourSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  name_esp: z.boolean().optional(),
  description: z.boolean().optional(),
  description_esp: z.boolean().optional(),
  image: z.boolean().optional(),
  hotelId: z.boolean().optional(),
  price: z.boolean().optional(),
  priceKids: z.boolean().optional(),
  category: z.boolean().optional(),
  offer: z.boolean().optional(),
  discount: z.boolean().optional(),
  whattobring: z.boolean().optional(),
  included: z.boolean().optional(),
  pickuptime: z.boolean().optional(),
  maxPeople: z.boolean().optional(),
  minPeople: z.boolean().optional(),
  minAge: z.boolean().optional(),
  bestSeller: z.boolean().optional(),
  priceInfo: z.boolean().optional(),
  location: z.boolean().optional(),
  offered: z.boolean().optional(),
  duration: z.boolean().optional(),
  videos: z.boolean().optional(),
  images: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  pricecategory: z.union([z.boolean(),z.lazy(() => TourPriceCategoryFindManyArgsSchema)]).optional(),
  Hotel: z.union([z.boolean(),z.lazy(() => HotelArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TourCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const TourFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TourFindUniqueOrThrowArgs> = z.object({
  select: TourSelectSchema.optional(),
  include: z.lazy(() => TourIncludeSchema).optional(),
  where: TourWhereUniqueInputSchema,
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export default TourFindUniqueOrThrowArgsSchema;
