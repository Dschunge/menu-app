import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TableRestaurantIdNumberCompoundUniqueInputSchema } from './TableRestaurantIdNumberCompoundUniqueInputSchema';
import { TableWhereInputSchema } from './TableWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { RestaurantScalarRelationFilterSchema } from './RestaurantScalarRelationFilterSchema';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';
import { ReservationListRelationFilterSchema } from './ReservationListRelationFilterSchema';

export const TableWhereUniqueInputSchema: z.ZodType<Prisma.TableWhereUniqueInput> = z.union([
  z.object({
    id: z.string().uuid(),
    restaurantId_number: z.lazy(() => TableRestaurantIdNumberCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string().uuid(),
  }),
  z.object({
    restaurantId_number: z.lazy(() => TableRestaurantIdNumberCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().uuid().optional(),
  restaurantId_number: z.lazy(() => TableRestaurantIdNumberCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => TableWhereInputSchema),z.lazy(() => TableWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TableWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TableWhereInputSchema),z.lazy(() => TableWhereInputSchema).array() ]).optional(),
  number: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  capacity: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  location: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  restaurantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  restaurant: z.union([ z.lazy(() => RestaurantScalarRelationFilterSchema),z.lazy(() => RestaurantWhereInputSchema) ]).optional(),
  reservations: z.lazy(() => ReservationListRelationFilterSchema).optional()
}).strict());

export default TableWhereUniqueInputSchema;
