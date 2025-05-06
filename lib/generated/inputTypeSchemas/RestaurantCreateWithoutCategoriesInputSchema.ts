import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { DishCreateNestedManyWithoutRestaurantInputSchema } from './DishCreateNestedManyWithoutRestaurantInputSchema';
import { MenuCreateNestedManyWithoutRestaurantInputSchema } from './MenuCreateNestedManyWithoutRestaurantInputSchema';
import { TableCreateNestedManyWithoutRestaurantInputSchema } from './TableCreateNestedManyWithoutRestaurantInputSchema';
import { ReservationCreateNestedManyWithoutRestaurantInputSchema } from './ReservationCreateNestedManyWithoutRestaurantInputSchema';
import { OpeningHoursCreateNestedManyWithoutRestaurantInputSchema } from './OpeningHoursCreateNestedManyWithoutRestaurantInputSchema';

export const RestaurantCreateWithoutCategoriesInputSchema: z.ZodType<Prisma.RestaurantCreateWithoutCategoriesInput> = z.object({
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
  dishes: z.lazy(() => DishCreateNestedManyWithoutRestaurantInputSchema).optional(),
  menus: z.lazy(() => MenuCreateNestedManyWithoutRestaurantInputSchema).optional(),
  tables: z.lazy(() => TableCreateNestedManyWithoutRestaurantInputSchema).optional(),
  reservations: z.lazy(() => ReservationCreateNestedManyWithoutRestaurantInputSchema).optional(),
  openingHours: z.lazy(() => OpeningHoursCreateNestedManyWithoutRestaurantInputSchema).optional()
}).strict();

export default RestaurantCreateWithoutCategoriesInputSchema;
