import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { DishCreatedietaryInfoInputSchema } from './DishCreatedietaryInfoInputSchema';
import { DishCreateallergensInputSchema } from './DishCreateallergensInputSchema';
import { DishCreateingredientsInputSchema } from './DishCreateingredientsInputSchema';

export const DishCreateManyMenuInputSchema: z.ZodType<Prisma.DishCreateManyMenuInput> = z.object({
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
  restaurantId: z.string(),
  categoryId: z.string(),
  subcategoryId: z.string().optional().nullable(),
  subSubcategoryId: z.string().optional().nullable(),
  availableAtDayOfWeek: z.number().int().optional(),
  dietaryInfo: z.union([ z.lazy(() => DishCreatedietaryInfoInputSchema),z.string().array() ]).optional(),
  allergens: z.union([ z.lazy(() => DishCreateallergensInputSchema),z.string().array() ]).optional(),
  ingredients: z.union([ z.lazy(() => DishCreateingredientsInputSchema),z.string().array() ]).optional(),
  prepTime: z.number().int().optional().nullable(),
  isPopular: z.boolean().optional(),
  isNew: z.boolean().optional(),
  course_number: z.number().int().optional()
}).strict();

export default DishCreateManyMenuInputSchema;
