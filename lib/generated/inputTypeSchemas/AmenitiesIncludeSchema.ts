import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { HotelArgsSchema } from "../outputTypeSchemas/HotelArgsSchema"

export const AmenitiesIncludeSchema: z.ZodType<Prisma.AmenitiesInclude> = z.object({
  Hotel: z.union([z.boolean(),z.lazy(() => HotelArgsSchema)]).optional(),
}).strict()

export default AmenitiesIncludeSchema;
