import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TourPriceCategoryWhereInputSchema } from '../inputTypeSchemas/TourPriceCategoryWhereInputSchema'
import { TourPriceCategoryOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TourPriceCategoryOrderByWithAggregationInputSchema'
import { TourPriceCategoryScalarFieldEnumSchema } from '../inputTypeSchemas/TourPriceCategoryScalarFieldEnumSchema'
import { TourPriceCategoryScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TourPriceCategoryScalarWhereWithAggregatesInputSchema'

export const TourPriceCategoryGroupByArgsSchema: z.ZodType<Prisma.TourPriceCategoryGroupByArgs> = z.object({
  where: TourPriceCategoryWhereInputSchema.optional(),
  orderBy: z.union([ TourPriceCategoryOrderByWithAggregationInputSchema.array(),TourPriceCategoryOrderByWithAggregationInputSchema ]).optional(),
  by: TourPriceCategoryScalarFieldEnumSchema.array(),
  having: TourPriceCategoryScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default TourPriceCategoryGroupByArgsSchema;
