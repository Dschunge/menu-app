import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { SpaPriceCategoryFindManyArgsSchema } from "../outputTypeSchemas/SpaPriceCategoryFindManyArgsSchema"
import { HotelArgsSchema } from "../outputTypeSchemas/HotelArgsSchema"
import { SpaCountOutputTypeArgsSchema } from "../outputTypeSchemas/SpaCountOutputTypeArgsSchema"

export const SpaSelectSchema: z.ZodType<Prisma.SpaSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  name_esp: z.boolean().optional(),
  description: z.boolean().optional(),
  description_esp: z.boolean().optional(),
  hotelId: z.boolean().optional(),
  type: z.boolean().optional(),
  videos: z.boolean().optional(),
  images: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  pricecategory: z.union([z.boolean(),z.lazy(() => SpaPriceCategoryFindManyArgsSchema)]).optional(),
  Hotel: z.union([z.boolean(),z.lazy(() => HotelArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SpaCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default SpaSelectSchema;
