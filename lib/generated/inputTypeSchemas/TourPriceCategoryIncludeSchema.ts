import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TourArgsSchema } from "../outputTypeSchemas/TourArgsSchema"

export const TourPriceCategoryIncludeSchema: z.ZodType<Prisma.TourPriceCategoryInclude> = z.object({
  Tour: z.union([z.boolean(),z.lazy(() => TourArgsSchema)]).optional(),
}).strict()

export default TourPriceCategoryIncludeSchema;
