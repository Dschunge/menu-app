import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TourPriceCategoryWhereInputSchema } from '../inputTypeSchemas/TourPriceCategoryWhereInputSchema'
import { TourPriceCategoryOrderByWithRelationInputSchema } from '../inputTypeSchemas/TourPriceCategoryOrderByWithRelationInputSchema'
import { TourPriceCategoryWhereUniqueInputSchema } from '../inputTypeSchemas/TourPriceCategoryWhereUniqueInputSchema'

export const TourPriceCategoryAggregateArgsSchema: z.ZodType<Prisma.TourPriceCategoryAggregateArgs> = z.object({
  where: TourPriceCategoryWhereInputSchema.optional(),
  orderBy: z.union([ TourPriceCategoryOrderByWithRelationInputSchema.array(),TourPriceCategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: TourPriceCategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default TourPriceCategoryAggregateArgsSchema;
