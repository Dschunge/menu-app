import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { DishUpdatedietaryInfoInputSchema } from './DishUpdatedietaryInfoInputSchema';
import { DishUpdateallergensInputSchema } from './DishUpdateallergensInputSchema';
import { DishUpdateingredientsInputSchema } from './DishUpdateingredientsInputSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { RestaurantUpdateOneRequiredWithoutDishesNestedInputSchema } from './RestaurantUpdateOneRequiredWithoutDishesNestedInputSchema';
import { CategoryUpdateOneRequiredWithoutDishesNestedInputSchema } from './CategoryUpdateOneRequiredWithoutDishesNestedInputSchema';
import { SubcategoryUpdateOneWithoutDishesNestedInputSchema } from './SubcategoryUpdateOneWithoutDishesNestedInputSchema';
import { SubSubcategoryUpdateOneWithoutDishesNestedInputSchema } from './SubSubcategoryUpdateOneWithoutDishesNestedInputSchema';
import { MenuUpdateOneWithoutDishesNestedInputSchema } from './MenuUpdateOneWithoutDishesNestedInputSchema';

export const DishUpdateInputSchema: z.ZodType<Prisma.DishUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sku: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name_esp: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description_esp: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  unit: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  availableAtDayOfWeek: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  dietaryInfo: z.union([ z.lazy(() => DishUpdatedietaryInfoInputSchema),z.string().array() ]).optional(),
  allergens: z.union([ z.lazy(() => DishUpdateallergensInputSchema),z.string().array() ]).optional(),
  ingredients: z.union([ z.lazy(() => DishUpdateingredientsInputSchema),z.string().array() ]).optional(),
  prepTime: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isPopular: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  isNew: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  course_number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  restaurant: z.lazy(() => RestaurantUpdateOneRequiredWithoutDishesNestedInputSchema).optional(),
  category: z.lazy(() => CategoryUpdateOneRequiredWithoutDishesNestedInputSchema).optional(),
  subcategory: z.lazy(() => SubcategoryUpdateOneWithoutDishesNestedInputSchema).optional(),
  subSubcategory: z.lazy(() => SubSubcategoryUpdateOneWithoutDishesNestedInputSchema).optional(),
  menu: z.lazy(() => MenuUpdateOneWithoutDishesNestedInputSchema).optional()
}).strict();

export default DishUpdateInputSchema;
