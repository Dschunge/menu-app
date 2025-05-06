import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { MenuWhereInputSchema } from './MenuWhereInputSchema';

export const MenuListRelationFilterSchema: z.ZodType<Prisma.MenuListRelationFilter> = z.object({
  every: z.lazy(() => MenuWhereInputSchema).optional(),
  some: z.lazy(() => MenuWhereInputSchema).optional(),
  none: z.lazy(() => MenuWhereInputSchema).optional()
}).strict();

export default MenuListRelationFilterSchema;
