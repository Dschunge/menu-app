import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { MenuIncludeSchema } from '../inputTypeSchemas/MenuIncludeSchema'
import { MenuWhereUniqueInputSchema } from '../inputTypeSchemas/MenuWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { RestaurantArgsSchema } from "../outputTypeSchemas/RestaurantArgsSchema"
import { DishFindManyArgsSchema } from "../outputTypeSchemas/DishFindManyArgsSchema"
import { MenuCountOutputTypeArgsSchema } from "../outputTypeSchemas/MenuCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MenuSelectSchema: z.ZodType<Prisma.MenuSelect> = z.object({
  id: z.boolean().optional(),
  position: z.boolean().optional(),
  name: z.boolean().optional(),
  name_esp: z.boolean().optional(),
  description: z.boolean().optional(),
  description_esp: z.boolean().optional(),
  image: z.boolean().optional(),
  price: z.boolean().optional(),
  restaurantId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  isActive: z.boolean().optional(),
  restaurant: z.union([z.boolean(),z.lazy(() => RestaurantArgsSchema)]).optional(),
  dishes: z.union([z.boolean(),z.lazy(() => DishFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => MenuCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const MenuDeleteArgsSchema: z.ZodType<Prisma.MenuDeleteArgs> = z.object({
  select: MenuSelectSchema.optional(),
  include: z.lazy(() => MenuIncludeSchema).optional(),
  where: MenuWhereUniqueInputSchema,
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export default MenuDeleteArgsSchema;
