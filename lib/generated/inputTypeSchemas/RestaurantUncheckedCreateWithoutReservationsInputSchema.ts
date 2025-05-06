import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { CategoryUncheckedCreateNestedManyWithoutRestaurantInputSchema } from './CategoryUncheckedCreateNestedManyWithoutRestaurantInputSchema';
import { DishUncheckedCreateNestedManyWithoutRestaurantInputSchema } from './DishUncheckedCreateNestedManyWithoutRestaurantInputSchema';
import { MenuUncheckedCreateNestedManyWithoutRestaurantInputSchema } from './MenuUncheckedCreateNestedManyWithoutRestaurantInputSchema';
import { TableUncheckedCreateNestedManyWithoutRestaurantInputSchema } from './TableUncheckedCreateNestedManyWithoutRestaurantInputSchema';
import { OpeningHoursUncheckedCreateNestedManyWithoutRestaurantInputSchema } from './OpeningHoursUncheckedCreateNestedManyWithoutRestaurantInputSchema';

export const RestaurantUncheckedCreateWithoutReservationsInputSchema: z.ZodType<Prisma.RestaurantUncheckedCreateWithoutReservationsInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string().optional(),
  description: z.string().optional().nullable(),
  descriptionshort: z.string().optional().nullable(),
  description_esp: z.string().optional().nullable(),
  descriptionshort_esp: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  address: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  state: z.string().optional().nullable(),
  zipCode: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  website: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  listorder: z.number().int().optional(),
  categories: z.lazy(() => CategoryUncheckedCreateNestedManyWithoutRestaurantInputSchema).optional(),
  dishes: z.lazy(() => DishUncheckedCreateNestedManyWithoutRestaurantInputSchema).optional(),
  menus: z.lazy(() => MenuUncheckedCreateNestedManyWithoutRestaurantInputSchema).optional(),
  tables: z.lazy(() => TableUncheckedCreateNestedManyWithoutRestaurantInputSchema).optional(),
  openingHours: z.lazy(() => OpeningHoursUncheckedCreateNestedManyWithoutRestaurantInputSchema).optional()
}).strict();

export default RestaurantUncheckedCreateWithoutReservationsInputSchema;
