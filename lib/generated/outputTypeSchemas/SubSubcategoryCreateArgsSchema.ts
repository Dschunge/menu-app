import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { SubSubcategoryIncludeSchema } from '../inputTypeSchemas/SubSubcategoryIncludeSchema'
import { SubSubcategoryCreateInputSchema } from '../inputTypeSchemas/SubSubcategoryCreateInputSchema'
import { SubSubcategoryUncheckedCreateInputSchema } from '../inputTypeSchemas/SubSubcategoryUncheckedCreateInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { SubcategoryArgsSchema } from "../outputTypeSchemas/SubcategoryArgsSchema"
import { DishFindManyArgsSchema } from "../outputTypeSchemas/DishFindManyArgsSchema"
import { SubSubcategoryCountOutputTypeArgsSchema } from "../outputTypeSchemas/SubSubcategoryCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SubSubcategorySelectSchema: z.ZodType<Prisma.SubSubcategorySelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  name_esp: z.boolean().optional(),
  slug: z.boolean().optional(),
  description: z.boolean().optional(),
  description_esp: z.boolean().optional(),
  image: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  parentSubcategoryId: z.boolean().optional(),
  postition: z.boolean().optional(),
  subcategory: z.union([z.boolean(),z.lazy(() => SubcategoryArgsSchema)]).optional(),
  dishes: z.union([z.boolean(),z.lazy(() => DishFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SubSubcategoryCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const SubSubcategoryCreateArgsSchema: z.ZodType<Prisma.SubSubcategoryCreateArgs> = z.object({
  select: SubSubcategorySelectSchema.optional(),
  include: z.lazy(() => SubSubcategoryIncludeSchema).optional(),
  data: z.union([ SubSubcategoryCreateInputSchema,SubSubcategoryUncheckedCreateInputSchema ]),
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export default SubSubcategoryCreateArgsSchema;
