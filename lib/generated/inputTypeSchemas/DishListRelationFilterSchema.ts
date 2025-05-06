import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { DishWhereInputSchema } from './DishWhereInputSchema';

export const DishListRelationFilterSchema: z.ZodType<Prisma.DishListRelationFilter> = z.object({
  every: z.lazy(() => DishWhereInputSchema).optional(),
  some: z.lazy(() => DishWhereInputSchema).optional(),
  none: z.lazy(() => DishWhereInputSchema).optional()
}).strict();

export default DishListRelationFilterSchema;
