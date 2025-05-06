import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { RestaurantScalarRelationFilterSchema } from './RestaurantScalarRelationFilterSchema';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';

export const OpeningHoursWhereInputSchema: z.ZodType<Prisma.OpeningHoursWhereInput> = z.object({
  AND: z.union([ z.lazy(() => OpeningHoursWhereInputSchema),z.lazy(() => OpeningHoursWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OpeningHoursWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OpeningHoursWhereInputSchema),z.lazy(() => OpeningHoursWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  dayOfWeek: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  openTime: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  closeTime: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  isClosed: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  restaurantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  restaurant: z.union([ z.lazy(() => RestaurantScalarRelationFilterSchema),z.lazy(() => RestaurantWhereInputSchema) ]).optional(),
}).strict();

export default OpeningHoursWhereInputSchema;
