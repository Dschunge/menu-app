import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { OpeningHoursRestaurantIdDayOfWeekCompoundUniqueInputSchema } from './OpeningHoursRestaurantIdDayOfWeekCompoundUniqueInputSchema';
import { OpeningHoursWhereInputSchema } from './OpeningHoursWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { RestaurantScalarRelationFilterSchema } from './RestaurantScalarRelationFilterSchema';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';

export const OpeningHoursWhereUniqueInputSchema: z.ZodType<Prisma.OpeningHoursWhereUniqueInput> = z.union([
  z.object({
    id: z.string().uuid(),
    restaurantId_dayOfWeek: z.lazy(() => OpeningHoursRestaurantIdDayOfWeekCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string().uuid(),
  }),
  z.object({
    restaurantId_dayOfWeek: z.lazy(() => OpeningHoursRestaurantIdDayOfWeekCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().uuid().optional(),
  restaurantId_dayOfWeek: z.lazy(() => OpeningHoursRestaurantIdDayOfWeekCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => OpeningHoursWhereInputSchema),z.lazy(() => OpeningHoursWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OpeningHoursWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OpeningHoursWhereInputSchema),z.lazy(() => OpeningHoursWhereInputSchema).array() ]).optional(),
  dayOfWeek: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  openTime: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  closeTime: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  isClosed: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  restaurantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  restaurant: z.union([ z.lazy(() => RestaurantScalarRelationFilterSchema),z.lazy(() => RestaurantWhereInputSchema) ]).optional(),
}).strict());

export default OpeningHoursWhereUniqueInputSchema;
