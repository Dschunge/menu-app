import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { SubSubcategoryIncludeSchema } from '../inputTypeSchemas/SubSubcategoryIncludeSchema'
import { SubSubcategoryWhereInputSchema } from '../inputTypeSchemas/SubSubcategoryWhereInputSchema'
import { SubSubcategoryOrderByWithRelationInputSchema } from '../inputTypeSchemas/SubSubcategoryOrderByWithRelationInputSchema'
import { SubSubcategoryWhereUniqueInputSchema } from '../inputTypeSchemas/SubSubcategoryWhereUniqueInputSchema'
import { SubSubcategoryScalarFieldEnumSchema } from '../inputTypeSchemas/SubSubcategoryScalarFieldEnumSchema'
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

export const SubSubcategoryFindManyArgsSchema: z.ZodType<Prisma.SubSubcategoryFindManyArgs> = z.object({
  select: SubSubcategorySelectSchema.optional(),
  include: z.lazy(() => SubSubcategoryIncludeSchema).optional(),
  where: SubSubcategoryWhereInputSchema.optional(),
  orderBy: z.union([ SubSubcategoryOrderByWithRelationInputSchema.array(),SubSubcategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: SubSubcategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SubSubcategoryScalarFieldEnumSchema,SubSubcategoryScalarFieldEnumSchema.array() ]).optional(),
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export default SubSubcategoryFindManyArgsSchema;
