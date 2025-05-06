import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { MenuWhereInputSchema } from './MenuWhereInputSchema';

export const MenuNullableScalarRelationFilterSchema: z.ZodType<Prisma.MenuNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => MenuWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => MenuWhereInputSchema).optional().nullable()
}).strict();

export default MenuNullableScalarRelationFilterSchema;
