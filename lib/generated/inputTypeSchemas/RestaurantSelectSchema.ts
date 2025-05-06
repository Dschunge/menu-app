import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { CategoryFindManyArgsSchema } from "../outputTypeSchemas/CategoryFindManyArgsSchema"
import { DishFindManyArgsSchema } from "../outputTypeSchemas/DishFindManyArgsSchema"
import { MenuFindManyArgsSchema } from "../outputTypeSchemas/MenuFindManyArgsSchema"
import { TableFindManyArgsSchema } from "../outputTypeSchemas/TableFindManyArgsSchema"
import { ReservationFindManyArgsSchema } from "../outputTypeSchemas/ReservationFindManyArgsSchema"
import { OpeningHoursFindManyArgsSchema } from "../outputTypeSchemas/OpeningHoursFindManyArgsSchema"
import { RestaurantCountOutputTypeArgsSchema } from "../outputTypeSchemas/RestaurantCountOutputTypeArgsSchema"

export const RestaurantSelectSchema: z.ZodType<Prisma.RestaurantSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  descriptionshort: z.boolean().optional(),
  description_esp: z.boolean().optional(),
  descriptionshort_esp: z.boolean().optional(),
  image: z.boolean().optional(),
  address: z.boolean().optional(),
  city: z.boolean().optional(),
  state: z.boolean().optional(),
  zipCode: z.boolean().optional(),
  phone: z.boolean().optional(),
  email: z.boolean().optional(),
  website: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  listorder: z.boolean().optional(),
  categories: z.union([z.boolean(),z.lazy(() => CategoryFindManyArgsSchema)]).optional(),
  dishes: z.union([z.boolean(),z.lazy(() => DishFindManyArgsSchema)]).optional(),
  menus: z.union([z.boolean(),z.lazy(() => MenuFindManyArgsSchema)]).optional(),
  tables: z.union([z.boolean(),z.lazy(() => TableFindManyArgsSchema)]).optional(),
  reservations: z.union([z.boolean(),z.lazy(() => ReservationFindManyArgsSchema)]).optional(),
  openingHours: z.union([z.boolean(),z.lazy(() => OpeningHoursFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => RestaurantCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default RestaurantSelectSchema;
