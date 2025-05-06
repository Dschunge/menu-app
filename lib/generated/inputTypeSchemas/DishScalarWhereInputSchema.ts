import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';

export const DishScalarWhereInputSchema: z.ZodType<Prisma.DishScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => DishScalarWhereInputSchema),z.lazy(() => DishScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DishScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DishScalarWhereInputSchema),z.lazy(() => DishScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  sku: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
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
  availableAtDayOfWeek: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  dietaryInfo: z.lazy(() => StringNullableListFilterSchema).optional(),
  allergens: z.lazy(() => StringNullableListFilterSchema).optional(),
  ingredients: z.lazy(() => StringNullableListFilterSchema).optional(),
  prepTime: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  isPopular: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  isNew: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  menuId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  course_number: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default DishScalarWhereInputSchema;
