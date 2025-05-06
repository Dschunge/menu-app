import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SubSubcategoryWhereInputSchema } from './SubSubcategoryWhereInputSchema';

export const SubSubcategoryNullableScalarRelationFilterSchema: z.ZodType<Prisma.SubSubcategoryNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => SubSubcategoryWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => SubSubcategoryWhereInputSchema).optional().nullable()
}).strict();

export default SubSubcategoryNullableScalarRelationFilterSchema;
