import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';

export const RestaurantScalarRelationFilterSchema: z.ZodType<Prisma.RestaurantScalarRelationFilter> = z.object({
  is: z.lazy(() => RestaurantWhereInputSchema).optional(),
  isNot: z.lazy(() => RestaurantWhereInputSchema).optional()
}).strict();

export default RestaurantScalarRelationFilterSchema;
