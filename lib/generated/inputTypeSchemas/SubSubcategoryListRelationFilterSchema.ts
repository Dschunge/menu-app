import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SubSubcategoryWhereInputSchema } from './SubSubcategoryWhereInputSchema';

export const SubSubcategoryListRelationFilterSchema: z.ZodType<Prisma.SubSubcategoryListRelationFilter> = z.object({
  every: z.lazy(() => SubSubcategoryWhereInputSchema).optional(),
  some: z.lazy(() => SubSubcategoryWhereInputSchema).optional(),
  none: z.lazy(() => SubSubcategoryWhereInputSchema).optional()
}).strict();

export default SubSubcategoryListRelationFilterSchema;
