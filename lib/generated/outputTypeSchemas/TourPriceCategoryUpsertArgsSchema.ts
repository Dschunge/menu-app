import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TourPriceCategoryIncludeSchema } from '../inputTypeSchemas/TourPriceCategoryIncludeSchema'
import { TourPriceCategoryWhereUniqueInputSchema } from '../inputTypeSchemas/TourPriceCategoryWhereUniqueInputSchema'
import { TourPriceCategoryCreateInputSchema } from '../inputTypeSchemas/TourPriceCategoryCreateInputSchema'
import { TourPriceCategoryUncheckedCreateInputSchema } from '../inputTypeSchemas/TourPriceCategoryUncheckedCreateInputSchema'
import { TourPriceCategoryUpdateInputSchema } from '../inputTypeSchemas/TourPriceCategoryUpdateInputSchema'
import { TourPriceCategoryUncheckedUpdateInputSchema } from '../inputTypeSchemas/TourPriceCategoryUncheckedUpdateInputSchema'
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

export const TourPriceCategoryUpsertArgsSchema: z.ZodType<Prisma.TourPriceCategoryUpsertArgs> = z.object({
  select: TourPriceCategorySelectSchema.optional(),
  include: z.lazy(() => TourPriceCategoryIncludeSchema).optional(),
  where: TourPriceCategoryWhereUniqueInputSchema,
  create: z.union([ TourPriceCategoryCreateInputSchema,TourPriceCategoryUncheckedCreateInputSchema ]),
  update: z.union([ TourPriceCategoryUpdateInputSchema,TourPriceCategoryUncheckedUpdateInputSchema ]),
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export default TourPriceCategoryUpsertArgsSchema;
