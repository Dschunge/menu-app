import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { SubcategoryIncludeSchema } from '../inputTypeSchemas/SubcategoryIncludeSchema'
import { SubcategoryWhereUniqueInputSchema } from '../inputTypeSchemas/SubcategoryWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { CategoryArgsSchema } from "../outputTypeSchemas/CategoryArgsSchema"
import { DishFindManyArgsSchema } from "../outputTypeSchemas/DishFindManyArgsSchema"
import { SubSubcategoryFindManyArgsSchema } from "../outputTypeSchemas/SubSubcategoryFindManyArgsSchema"
import { SubcategoryCountOutputTypeArgsSchema } from "../outputTypeSchemas/SubcategoryCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SubcategorySelectSchema: z.ZodType<Prisma.SubcategorySelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  name_esp: z.boolean().optional(),
  slug: z.boolean().optional(),
  description: z.boolean().optional(),
  description_esp: z.boolean().optional(),
  image: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  parentCategoryId: z.boolean().optional(),
  postition: z.boolean().optional(),
  category: z.union([z.boolean(),z.lazy(() => CategoryArgsSchema)]).optional(),
  dishes: z.union([z.boolean(),z.lazy(() => DishFindManyArgsSchema)]).optional(),
  subSubcategories: z.union([z.boolean(),z.lazy(() => SubSubcategoryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SubcategoryCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const SubcategoryDeleteArgsSchema: z.ZodType<Prisma.SubcategoryDeleteArgs> = z.object({
  select: SubcategorySelectSchema.optional(),
  include: z.lazy(() => SubcategoryIncludeSchema).optional(),
  where: SubcategoryWhereUniqueInputSchema,
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export default SubcategoryDeleteArgsSchema;
