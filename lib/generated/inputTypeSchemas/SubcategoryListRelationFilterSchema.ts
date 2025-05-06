import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SubcategoryWhereInputSchema } from './SubcategoryWhereInputSchema';

export const SubcategoryListRelationFilterSchema: z.ZodType<Prisma.SubcategoryListRelationFilter> = z.object({
  every: z.lazy(() => SubcategoryWhereInputSchema).optional(),
  some: z.lazy(() => SubcategoryWhereInputSchema).optional(),
  none: z.lazy(() => SubcategoryWhereInputSchema).optional()
}).strict();

export default SubcategoryListRelationFilterSchema;
