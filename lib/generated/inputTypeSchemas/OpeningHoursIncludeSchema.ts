import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { RestaurantArgsSchema } from "../outputTypeSchemas/RestaurantArgsSchema"

export const OpeningHoursIncludeSchema: z.ZodType<Prisma.OpeningHoursInclude> = z.object({
  restaurant: z.union([z.boolean(),z.lazy(() => RestaurantArgsSchema)]).optional(),
}).strict()

export default OpeningHoursIncludeSchema;
