import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { DishIncludeSchema } from '../inputTypeSchemas/DishIncludeSchema'
import { DishWhereUniqueInputSchema } from '../inputTypeSchemas/DishWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { RestaurantArgsSchema } from "../outputTypeSchemas/RestaurantArgsSchema"
import { CategoryArgsSchema } from "../outputTypeSchemas/CategoryArgsSchema"
import { SubcategoryArgsSchema } from "../outputTypeSchemas/SubcategoryArgsSchema"
import { SubSubcategoryArgsSchema } from "../outputTypeSchemas/SubSubcategoryArgsSchema"
import { MenuArgsSchema } from "../outputTypeSchemas/MenuArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DishSelectSchema: z.ZodType<Prisma.DishSelect> = z.object({
  id: z.boolean().optional(),
  sku: z.boolean().optional(),
  name: z.boolean().optional(),
  name_esp: z.boolean().optional(),
  description: z.boolean().optional(),
  description_esp: z.boolean().optional(),
  price: z.boolean().optional(),
  unit: z.boolean().optional(),
  image: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  restaurantId: z.boolean().optional(),
  categoryId: z.boolean().optional(),
  subcategoryId: z.boolean().optional(),
  subSubcategoryId: z.boolean().optional(),
  availableAtDayOfWeek: z.boolean().optional(),
  dietaryInfo: z.boolean().optional(),
  allergens: z.boolean().optional(),
  ingredients: z.boolean().optional(),
  prepTime: z.boolean().optional(),
  isPopular: z.boolean().optional(),
  isNew: z.boolean().optional(),
  menuId: z.boolean().optional(),
  course_number: z.boolean().optional(),
  restaurant: z.union([z.boolean(),z.lazy(() => RestaurantArgsSchema)]).optional(),
  category: z.union([z.boolean(),z.lazy(() => CategoryArgsSchema)]).optional(),
  subcategory: z.union([z.boolean(),z.lazy(() => SubcategoryArgsSchema)]).optional(),
  subSubcategory: z.union([z.boolean(),z.lazy(() => SubSubcategoryArgsSchema)]).optional(),
  menu: z.union([z.boolean(),z.lazy(() => MenuArgsSchema)]).optional(),
}).strict()

export const DishDeleteArgsSchema: z.ZodType<Prisma.DishDeleteArgs> = z.object({
  select: DishSelectSchema.optional(),
  include: z.lazy(() => DishIncludeSchema).optional(),
  where: DishWhereUniqueInputSchema,
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export default DishDeleteArgsSchema;
