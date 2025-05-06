import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TourPriceCategoryFindManyArgsSchema } from "../outputTypeSchemas/TourPriceCategoryFindManyArgsSchema"
import { HotelArgsSchema } from "../outputTypeSchemas/HotelArgsSchema"
import { TourCountOutputTypeArgsSchema } from "../outputTypeSchemas/TourCountOutputTypeArgsSchema"

export const TourIncludeSchema: z.ZodType<Prisma.TourInclude> = z.object({
  pricecategory: z.union([z.boolean(),z.lazy(() => TourPriceCategoryFindManyArgsSchema)]).optional(),
  Hotel: z.union([z.boolean(),z.lazy(() => HotelArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TourCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default TourIncludeSchema;
