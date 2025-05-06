import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { CategoryListRelationFilterSchema } from './CategoryListRelationFilterSchema';
import { DishListRelationFilterSchema } from './DishListRelationFilterSchema';
import { MenuListRelationFilterSchema } from './MenuListRelationFilterSchema';
import { TableListRelationFilterSchema } from './TableListRelationFilterSchema';
import { ReservationListRelationFilterSchema } from './ReservationListRelationFilterSchema';
import { OpeningHoursListRelationFilterSchema } from './OpeningHoursListRelationFilterSchema';

export const RestaurantWhereUniqueInputSchema: z.ZodType<Prisma.RestaurantWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => RestaurantWhereInputSchema),z.lazy(() => RestaurantWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RestaurantWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RestaurantWhereInputSchema),z.lazy(() => RestaurantWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  descriptionshort: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  description_esp: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  descriptionshort_esp: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  address: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  city: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  state: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  zipCode: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  phone: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  website: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  listorder: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  categories: z.lazy(() => CategoryListRelationFilterSchema).optional(),
  dishes: z.lazy(() => DishListRelationFilterSchema).optional(),
  menus: z.lazy(() => MenuListRelationFilterSchema).optional(),
  tables: z.lazy(() => TableListRelationFilterSchema).optional(),
  reservations: z.lazy(() => ReservationListRelationFilterSchema).optional(),
  openingHours: z.lazy(() => OpeningHoursListRelationFilterSchema).optional()
}).strict());

export default RestaurantWhereUniqueInputSchema;
