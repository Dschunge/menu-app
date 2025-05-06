import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { CategoryFindManyArgsSchema } from "../outputTypeSchemas/CategoryFindManyArgsSchema"
import { DishFindManyArgsSchema } from "../outputTypeSchemas/DishFindManyArgsSchema"
import { MenuFindManyArgsSchema } from "../outputTypeSchemas/MenuFindManyArgsSchema"
import { TableFindManyArgsSchema } from "../outputTypeSchemas/TableFindManyArgsSchema"
import { ReservationFindManyArgsSchema } from "../outputTypeSchemas/ReservationFindManyArgsSchema"
import { OpeningHoursFindManyArgsSchema } from "../outputTypeSchemas/OpeningHoursFindManyArgsSchema"
import { RestaurantCountOutputTypeArgsSchema } from "../outputTypeSchemas/RestaurantCountOutputTypeArgsSchema"

export const RestaurantIncludeSchema: z.ZodType<Prisma.RestaurantInclude> = z.object({
  categories: z.union([z.boolean(),z.lazy(() => CategoryFindManyArgsSchema)]).optional(),
  dishes: z.union([z.boolean(),z.lazy(() => DishFindManyArgsSchema)]).optional(),
  menus: z.union([z.boolean(),z.lazy(() => MenuFindManyArgsSchema)]).optional(),
  tables: z.union([z.boolean(),z.lazy(() => TableFindManyArgsSchema)]).optional(),
  reservations: z.union([z.boolean(),z.lazy(() => ReservationFindManyArgsSchema)]).optional(),
  openingHours: z.union([z.boolean(),z.lazy(() => OpeningHoursFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => RestaurantCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default RestaurantIncludeSchema;
