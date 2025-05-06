import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DishUpdateManyWithoutRestaurantNestedInputSchema } from './DishUpdateManyWithoutRestaurantNestedInputSchema';
import { MenuUpdateManyWithoutRestaurantNestedInputSchema } from './MenuUpdateManyWithoutRestaurantNestedInputSchema';
import { TableUpdateManyWithoutRestaurantNestedInputSchema } from './TableUpdateManyWithoutRestaurantNestedInputSchema';
import { ReservationUpdateManyWithoutRestaurantNestedInputSchema } from './ReservationUpdateManyWithoutRestaurantNestedInputSchema';
import { OpeningHoursUpdateManyWithoutRestaurantNestedInputSchema } from './OpeningHoursUpdateManyWithoutRestaurantNestedInputSchema';

export const RestaurantUpdateWithoutCategoriesInputSchema: z.ZodType<Prisma.RestaurantUpdateWithoutCategoriesInput> = z.object({
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
  dishes: z.lazy(() => DishUpdateManyWithoutRestaurantNestedInputSchema).optional(),
  menus: z.lazy(() => MenuUpdateManyWithoutRestaurantNestedInputSchema).optional(),
  tables: z.lazy(() => TableUpdateManyWithoutRestaurantNestedInputSchema).optional(),
  reservations: z.lazy(() => ReservationUpdateManyWithoutRestaurantNestedInputSchema).optional(),
  openingHours: z.lazy(() => OpeningHoursUpdateManyWithoutRestaurantNestedInputSchema).optional()
}).strict();

export default RestaurantUpdateWithoutCategoriesInputSchema;
