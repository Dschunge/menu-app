import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { MenuRestaurantIdNameCompoundUniqueInputSchema } from './MenuRestaurantIdNameCompoundUniqueInputSchema';
import { MenuWhereInputSchema } from './MenuWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { RestaurantScalarRelationFilterSchema } from './RestaurantScalarRelationFilterSchema';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';
import { DishListRelationFilterSchema } from './DishListRelationFilterSchema';

export const MenuWhereUniqueInputSchema: z.ZodType<Prisma.MenuWhereUniqueInput> = z.union([
  z.object({
    id: z.string().uuid(),
    restaurantId_name: z.lazy(() => MenuRestaurantIdNameCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string().uuid(),
  }),
  z.object({
    restaurantId_name: z.lazy(() => MenuRestaurantIdNameCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().uuid().optional(),
  restaurantId_name: z.lazy(() => MenuRestaurantIdNameCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => MenuWhereInputSchema),z.lazy(() => MenuWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MenuWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MenuWhereInputSchema),z.lazy(() => MenuWhereInputSchema).array() ]).optional(),
  position: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name_esp: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  description_esp: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  price: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  restaurantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  restaurant: z.union([ z.lazy(() => RestaurantScalarRelationFilterSchema),z.lazy(() => RestaurantWhereInputSchema) ]).optional(),
  dishes: z.lazy(() => DishListRelationFilterSchema).optional()
}).strict());

export default MenuWhereUniqueInputSchema;
