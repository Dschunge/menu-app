import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { DishWhereInputSchema } from './DishWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { RestaurantScalarRelationFilterSchema } from './RestaurantScalarRelationFilterSchema';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';
import { CategoryScalarRelationFilterSchema } from './CategoryScalarRelationFilterSchema';
import { CategoryWhereInputSchema } from './CategoryWhereInputSchema';
import { SubcategoryNullableScalarRelationFilterSchema } from './SubcategoryNullableScalarRelationFilterSchema';
import { SubcategoryWhereInputSchema } from './SubcategoryWhereInputSchema';
import { SubSubcategoryNullableScalarRelationFilterSchema } from './SubSubcategoryNullableScalarRelationFilterSchema';
import { SubSubcategoryWhereInputSchema } from './SubSubcategoryWhereInputSchema';
import { MenuNullableScalarRelationFilterSchema } from './MenuNullableScalarRelationFilterSchema';
import { MenuWhereInputSchema } from './MenuWhereInputSchema';

export const DishWhereUniqueInputSchema: z.ZodType<Prisma.DishWhereUniqueInput> = z.union([
  z.object({
    id: z.string().uuid(),
    sku: z.number().int()
  }),
  z.object({
    id: z.string().uuid(),
  }),
  z.object({
    sku: z.number().int(),
  }),
])
.and(z.object({
  id: z.string().uuid().optional(),
  sku: z.number().int().optional(),
  AND: z.union([ z.lazy(() => DishWhereInputSchema),z.lazy(() => DishWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DishWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DishWhereInputSchema),z.lazy(() => DishWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name_esp: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description_esp: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  price: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  unit: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  restaurantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  categoryId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  subcategoryId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  subSubcategoryId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  availableAtDayOfWeek: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  dietaryInfo: z.lazy(() => StringNullableListFilterSchema).optional(),
  allergens: z.lazy(() => StringNullableListFilterSchema).optional(),
  ingredients: z.lazy(() => StringNullableListFilterSchema).optional(),
  prepTime: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  isPopular: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  isNew: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  menuId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  course_number: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  restaurant: z.union([ z.lazy(() => RestaurantScalarRelationFilterSchema),z.lazy(() => RestaurantWhereInputSchema) ]).optional(),
  category: z.union([ z.lazy(() => CategoryScalarRelationFilterSchema),z.lazy(() => CategoryWhereInputSchema) ]).optional(),
  subcategory: z.union([ z.lazy(() => SubcategoryNullableScalarRelationFilterSchema),z.lazy(() => SubcategoryWhereInputSchema) ]).optional().nullable(),
  subSubcategory: z.union([ z.lazy(() => SubSubcategoryNullableScalarRelationFilterSchema),z.lazy(() => SubSubcategoryWhereInputSchema) ]).optional().nullable(),
  menu: z.union([ z.lazy(() => MenuNullableScalarRelationFilterSchema),z.lazy(() => MenuWhereInputSchema) ]).optional().nullable(),
}).strict());

export default DishWhereUniqueInputSchema;
