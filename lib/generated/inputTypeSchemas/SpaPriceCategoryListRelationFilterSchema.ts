import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SpaPriceCategoryWhereInputSchema } from './SpaPriceCategoryWhereInputSchema';

export const SpaPriceCategoryListRelationFilterSchema: z.ZodType<Prisma.SpaPriceCategoryListRelationFilter> = z.object({
  every: z.lazy(() => SpaPriceCategoryWhereInputSchema).optional(),
  some: z.lazy(() => SpaPriceCategoryWhereInputSchema).optional(),
  none: z.lazy(() => SpaPriceCategoryWhereInputSchema).optional()
}).strict();

export default SpaPriceCategoryListRelationFilterSchema;
