import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { ActivityFindManyArgsSchema } from "../outputTypeSchemas/ActivityFindManyArgsSchema"
import { TourFindManyArgsSchema } from "../outputTypeSchemas/TourFindManyArgsSchema"
import { SpaFindManyArgsSchema } from "../outputTypeSchemas/SpaFindManyArgsSchema"
import { AmenitiesFindManyArgsSchema } from "../outputTypeSchemas/AmenitiesFindManyArgsSchema"
import { TVChannelsFindManyArgsSchema } from "../outputTypeSchemas/TVChannelsFindManyArgsSchema"
import { HotelCountOutputTypeArgsSchema } from "../outputTypeSchemas/HotelCountOutputTypeArgsSchema"

export const HotelIncludeSchema: z.ZodType<Prisma.HotelInclude> = z.object({
  activities: z.union([z.boolean(),z.lazy(() => ActivityFindManyArgsSchema)]).optional(),
  tours: z.union([z.boolean(),z.lazy(() => TourFindManyArgsSchema)]).optional(),
  spa: z.union([z.boolean(),z.lazy(() => SpaFindManyArgsSchema)]).optional(),
  amenities: z.union([z.boolean(),z.lazy(() => AmenitiesFindManyArgsSchema)]).optional(),
  tvchannels: z.union([z.boolean(),z.lazy(() => TVChannelsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => HotelCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default HotelIncludeSchema;
