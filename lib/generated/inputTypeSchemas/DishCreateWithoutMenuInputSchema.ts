import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { DishCreatedietaryInfoInputSchema } from './DishCreatedietaryInfoInputSchema';
import { DishCreateallergensInputSchema } from './DishCreateallergensInputSchema';
import { DishCreateingredientsInputSchema } from './DishCreateingredientsInputSchema';
import { RestaurantCreateNestedOneWithoutDishesInputSchema } from './RestaurantCreateNestedOneWithoutDishesInputSchema';
import { CategoryCreateNestedOneWithoutDishesInputSchema } from './CategoryCreateNestedOneWithoutDishesInputSchema';
import { SubcategoryCreateNestedOneWithoutDishesInputSchema } from './SubcategoryCreateNestedOneWithoutDishesInputSchema';
import { SubSubcategoryCreateNestedOneWithoutDishesInputSchema } from './SubSubcategoryCreateNestedOneWithoutDishesInputSchema';

export const DishCreateWithoutMenuInputSchema: z.ZodType<Prisma.DishCreateWithoutMenuInput> = z.object({
  id: z.string().uuid().optional(),
  sku: z.number().int(),
  name: z.string(),
  name_esp: z.string(),
  description: z.string(),
  description_esp: z.string(),
  price: z.number(),
  unit: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  availableAtDayOfWeek: z.number().int().optional(),
  dietaryInfo: z.union([ z.lazy(() => DishCreatedietaryInfoInputSchema),z.string().array() ]).optional(),
  allergens: z.union([ z.lazy(() => DishCreateallergensInputSchema),z.string().array() ]).optional(),
  ingredients: z.union([ z.lazy(() => DishCreateingredientsInputSchema),z.string().array() ]).optional(),
  prepTime: z.number().int().optional().nullable(),
  isPopular: z.boolean().optional(),
  isNew: z.boolean().optional(),
  course_number: z.number().int().optional(),
  restaurant: z.lazy(() => RestaurantCreateNestedOneWithoutDishesInputSchema),
  category: z.lazy(() => CategoryCreateNestedOneWithoutDishesInputSchema),
  subcategory: z.lazy(() => SubcategoryCreateNestedOneWithoutDishesInputSchema).optional(),
  subSubcategory: z.lazy(() => SubSubcategoryCreateNestedOneWithoutDishesInputSchema).optional()
}).strict();

export default DishCreateWithoutMenuInputSchema;
