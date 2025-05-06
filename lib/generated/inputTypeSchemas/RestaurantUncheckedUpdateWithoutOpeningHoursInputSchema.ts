import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { CategoryUncheckedUpdateManyWithoutRestaurantNestedInputSchema } from './CategoryUncheckedUpdateManyWithoutRestaurantNestedInputSchema';
import { DishUncheckedUpdateManyWithoutRestaurantNestedInputSchema } from './DishUncheckedUpdateManyWithoutRestaurantNestedInputSchema';
import { MenuUncheckedUpdateManyWithoutRestaurantNestedInputSchema } from './MenuUncheckedUpdateManyWithoutRestaurantNestedInputSchema';
import { TableUncheckedUpdateManyWithoutRestaurantNestedInputSchema } from './TableUncheckedUpdateManyWithoutRestaurantNestedInputSchema';
import { ReservationUncheckedUpdateManyWithoutRestaurantNestedInputSchema } from './ReservationUncheckedUpdateManyWithoutRestaurantNestedInputSchema';

export const RestaurantUncheckedUpdateWithoutOpeningHoursInputSchema: z.ZodType<Prisma.RestaurantUncheckedUpdateWithoutOpeningHoursInput> = z.object({
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
  categories: z.lazy(() => CategoryUncheckedUpdateManyWithoutRestaurantNestedInputSchema).optional(),
  dishes: z.lazy(() => DishUncheckedUpdateManyWithoutRestaurantNestedInputSchema).optional(),
  menus: z.lazy(() => MenuUncheckedUpdateManyWithoutRestaurantNestedInputSchema).optional(),
  tables: z.lazy(() => TableUncheckedUpdateManyWithoutRestaurantNestedInputSchema).optional(),
  reservations: z.lazy(() => ReservationUncheckedUpdateManyWithoutRestaurantNestedInputSchema).optional()
}).strict();

export default RestaurantUncheckedUpdateWithoutOpeningHoursInputSchema;
