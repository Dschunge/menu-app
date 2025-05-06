import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { SpaArgsSchema } from "../outputTypeSchemas/SpaArgsSchema"

export const SpaPriceCategoryIncludeSchema: z.ZodType<Prisma.SpaPriceCategoryInclude> = z.object({
  spa: z.union([z.boolean(),z.lazy(() => SpaArgsSchema)]).optional(),
}).strict()

export default SpaPriceCategoryIncludeSchema;
