import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { RestaurantScalarRelationFilterSchema } from './RestaurantScalarRelationFilterSchema';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';
import { ReservationListRelationFilterSchema } from './ReservationListRelationFilterSchema';

export const TableWhereInputSchema: z.ZodType<Prisma.TableWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TableWhereInputSchema),z.lazy(() => TableWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TableWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TableWhereInputSchema),z.lazy(() => TableWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  number: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  capacity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  location: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  restaurantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  restaurant: z.union([ z.lazy(() => RestaurantScalarRelationFilterSchema),z.lazy(() => RestaurantWhereInputSchema) ]).optional(),
  reservations: z.lazy(() => ReservationListRelationFilterSchema).optional()
}).strict();

export default TableWhereInputSchema;
