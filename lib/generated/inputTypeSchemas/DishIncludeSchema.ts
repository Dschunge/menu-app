import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { RestaurantArgsSchema } from "../outputTypeSchemas/RestaurantArgsSchema"
import { CategoryArgsSchema } from "../outputTypeSchemas/CategoryArgsSchema"
import { SubcategoryArgsSchema } from "../outputTypeSchemas/SubcategoryArgsSchema"
import { SubSubcategoryArgsSchema } from "../outputTypeSchemas/SubSubcategoryArgsSchema"
import { MenuArgsSchema } from "../outputTypeSchemas/MenuArgsSchema"

export const DishIncludeSchema: z.ZodType<Prisma.DishInclude> = z.object({
  restaurant: z.union([z.boolean(),z.lazy(() => RestaurantArgsSchema)]).optional(),
  category: z.union([z.boolean(),z.lazy(() => CategoryArgsSchema)]).optional(),
  subcategory: z.union([z.boolean(),z.lazy(() => SubcategoryArgsSchema)]).optional(),
  subSubcategory: z.union([z.boolean(),z.lazy(() => SubSubcategoryArgsSchema)]).optional(),
  menu: z.union([z.boolean(),z.lazy(() => MenuArgsSchema)]).optional(),
}).strict()

export default DishIncludeSchema;
