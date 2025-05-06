import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SubcategoryWhereInputSchema } from './SubcategoryWhereInputSchema';

export const SubcategoryScalarRelationFilterSchema: z.ZodType<Prisma.SubcategoryScalarRelationFilter> = z.object({
  is: z.lazy(() => SubcategoryWhereInputSchema).optional(),
  isNot: z.lazy(() => SubcategoryWhereInputSchema).optional()
}).strict();

export default SubcategoryScalarRelationFilterSchema;
