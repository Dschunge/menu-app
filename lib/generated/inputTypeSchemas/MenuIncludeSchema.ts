import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { RestaurantArgsSchema } from "../outputTypeSchemas/RestaurantArgsSchema"
import { DishFindManyArgsSchema } from "../outputTypeSchemas/DishFindManyArgsSchema"
import { MenuCountOutputTypeArgsSchema } from "../outputTypeSchemas/MenuCountOutputTypeArgsSchema"

export const MenuIncludeSchema: z.ZodType<Prisma.MenuInclude> = z.object({
  restaurant: z.union([z.boolean(),z.lazy(() => RestaurantArgsSchema)]).optional(),
  dishes: z.union([z.boolean(),z.lazy(() => DishFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => MenuCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default MenuIncludeSchema;
