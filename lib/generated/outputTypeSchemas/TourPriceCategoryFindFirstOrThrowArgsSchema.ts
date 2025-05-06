import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TourPriceCategoryIncludeSchema } from '../inputTypeSchemas/TourPriceCategoryIncludeSchema'
import { TourPriceCategoryWhereInputSchema } from '../inputTypeSchemas/TourPriceCategoryWhereInputSchema'
import { TourPriceCategoryOrderByWithRelationInputSchema } from '../inputTypeSchemas/TourPriceCategoryOrderByWithRelationInputSchema'
import { TourPriceCategoryWhereUniqueInputSchema } from '../inputTypeSchemas/TourPriceCategoryWhereUniqueInputSchema'
import { TourPriceCategoryScalarFieldEnumSchema } from '../inputTypeSchemas/TourPriceCategoryScalarFieldEnumSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { TourArgsSchema } from "../outputTypeSchemas/TourArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TourPriceCategorySelectSchema: z.ZodType<Prisma.TourPriceCategorySelect> = z.object({
  id: z.boolean().optional(),
  sku: z.boolean().optional(),
  price: z.boolean().optional(),
  description: z.boolean().optional(),
  description_esp: z.boolean().optional(),
  tourId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  Tour: z.union([z.boolean(),z.lazy(() => TourArgsSchema)]).optional(),
}).strict()

export const TourPriceCategoryFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TourPriceCategoryFindFirstOrThrowArgs> = z.object({
  select: TourPriceCategorySelectSchema.optional(),
  include: z.lazy(() => TourPriceCategoryIncludeSchema).optional(),
  where: TourPriceCategoryWhereInputSchema.optional(),
  orderBy: z.union([ TourPriceCategoryOrderByWithRelationInputSchema.array(),TourPriceCategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: TourPriceCategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TourPriceCategoryScalarFieldEnumSchema,TourPriceCategoryScalarFieldEnumSchema.array() ]).optional(),
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export default TourPriceCategoryFindFirstOrThrowArgsSchema;
