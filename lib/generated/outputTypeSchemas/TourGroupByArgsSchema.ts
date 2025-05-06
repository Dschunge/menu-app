import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TourWhereInputSchema } from '../inputTypeSchemas/TourWhereInputSchema'
import { TourOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TourOrderByWithAggregationInputSchema'
import { TourScalarFieldEnumSchema } from '../inputTypeSchemas/TourScalarFieldEnumSchema'
import { TourScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TourScalarWhereWithAggregatesInputSchema'

export const TourGroupByArgsSchema: z.ZodType<Prisma.TourGroupByArgs> = z.object({
  where: TourWhereInputSchema.optional(),
  orderBy: z.union([ TourOrderByWithAggregationInputSchema.array(),TourOrderByWithAggregationInputSchema ]).optional(),
  by: TourScalarFieldEnumSchema.array(),
  having: TourScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default TourGroupByArgsSchema;
