import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { SpaPriceCategoryFindManyArgsSchema } from "../outputTypeSchemas/SpaPriceCategoryFindManyArgsSchema"
import { HotelArgsSchema } from "../outputTypeSchemas/HotelArgsSchema"
import { SpaCountOutputTypeArgsSchema } from "../outputTypeSchemas/SpaCountOutputTypeArgsSchema"

export const SpaIncludeSchema: z.ZodType<Prisma.SpaInclude> = z.object({
  pricecategory: z.union([z.boolean(),z.lazy(() => SpaPriceCategoryFindManyArgsSchema)]).optional(),
  Hotel: z.union([z.boolean(),z.lazy(() => HotelArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SpaCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default SpaIncludeSchema;
