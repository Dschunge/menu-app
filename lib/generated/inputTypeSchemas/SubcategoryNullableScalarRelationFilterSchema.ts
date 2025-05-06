import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SubcategoryWhereInputSchema } from './SubcategoryWhereInputSchema';

export const SubcategoryNullableScalarRelationFilterSchema: z.ZodType<Prisma.SubcategoryNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => SubcategoryWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => SubcategoryWhereInputSchema).optional().nullable()
}).strict();

export default SubcategoryNullableScalarRelationFilterSchema;
