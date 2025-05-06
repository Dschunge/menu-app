import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { CategoryUpdateManyWithoutRestaurantNestedInputSchema } from './CategoryUpdateManyWithoutRestaurantNestedInputSchema';
import { DishUpdateManyWithoutRestaurantNestedInputSchema } from './DishUpdateManyWithoutRestaurantNestedInputSchema';
import { MenuUpdateManyWithoutRestaurantNestedInputSchema } from './MenuUpdateManyWithoutRestaurantNestedInputSchema';
import { TableUpdateManyWithoutRestaurantNestedInputSchema } from './TableUpdateManyWithoutRestaurantNestedInputSchema';
import { OpeningHoursUpdateManyWithoutRestaurantNestedInputSchema } from './OpeningHoursUpdateManyWithoutRestaurantNestedInputSchema';

export const RestaurantUpdateWithoutReservationsInputSchema: z.ZodType<Prisma.RestaurantUpdateWithoutReservationsInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  descriptionshort: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description_esp: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  descriptionshort_esp: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  city: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  zipCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  website: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  listorder: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  categories: z.lazy(() => CategoryUpdateManyWithoutRestaurantNestedInputSchema).optional(),
  dishes: z.lazy(() => DishUpdateManyWithoutRestaurantNestedInputSchema).optional(),
  menus: z.lazy(() => MenuUpdateManyWithoutRestaurantNestedInputSchema).optional(),
  tables: z.lazy(() => TableUpdateManyWithoutRestaurantNestedInputSchema).optional(),
  openingHours: z.lazy(() => OpeningHoursUpdateManyWithoutRestaurantNestedInputSchema).optional()
}).strict();

export default RestaurantUpdateWithoutReservationsInputSchema;
