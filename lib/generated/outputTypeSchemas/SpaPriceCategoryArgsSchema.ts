import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { SpaPriceCategorySelectSchema } from '../inputTypeSchemas/SpaPriceCategorySelectSchema';
import { SpaPriceCategoryIncludeSchema } from '../inputTypeSchemas/SpaPriceCategoryIncludeSchema';

export const SpaPriceCategoryArgsSchema: z.ZodType<Prisma.SpaPriceCategoryDefaultArgs> = z.object({
  select: z.lazy(() => SpaPriceCategorySelectSchema).optional(),
  include: z.lazy(() => SpaPriceCategoryIncludeSchema).optional(),
}).strict();

export default SpaPriceCategoryArgsSchema;
