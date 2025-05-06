import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { SpaPriceCategoryIncludeSchema } from '../inputTypeSchemas/SpaPriceCategoryIncludeSchema'
import { SpaPriceCategoryWhereInputSchema } from '../inputTypeSchemas/SpaPriceCategoryWhereInputSchema'
import { SpaPriceCategoryOrderByWithRelationInputSchema } from '../inputTypeSchemas/SpaPriceCategoryOrderByWithRelationInputSchema'
import { SpaPriceCategoryWhereUniqueInputSchema } from '../inputTypeSchemas/SpaPriceCategoryWhereUniqueInputSchema'
import { SpaPriceCategoryScalarFieldEnumSchema } from '../inputTypeSchemas/SpaPriceCategoryScalarFieldEnumSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { SpaArgsSchema } from "../outputTypeSchemas/SpaArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SpaPriceCategorySelectSchema: z.ZodType<Prisma.SpaPriceCategorySelect> = z.object({
  id: z.boolean().optional(),
  sku: z.boolean().optional(),
  price: z.boolean().optional(),
  description: z.boolean().optional(),
  description_esp: z.boolean().optional(),
  duration: z.boolean().optional(),
  spaId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  spa: z.union([z.boolean(),z.lazy(() => SpaArgsSchema)]).optional(),
}).strict()

export const SpaPriceCategoryFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SpaPriceCategoryFindFirstOrThrowArgs> = z.object({
  select: SpaPriceCategorySelectSchema.optional(),
  include: z.lazy(() => SpaPriceCategoryIncludeSchema).optional(),
  where: SpaPriceCategoryWhereInputSchema.optional(),
  orderBy: z.union([ SpaPriceCategoryOrderByWithRelationInputSchema.array(),SpaPriceCategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: SpaPriceCategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SpaPriceCategoryScalarFieldEnumSchema,SpaPriceCategoryScalarFieldEnumSchema.array() ]).optional(),
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export default SpaPriceCategoryFindFirstOrThrowArgsSchema;
