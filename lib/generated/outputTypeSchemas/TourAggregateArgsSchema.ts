import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TourWhereInputSchema } from '../inputTypeSchemas/TourWhereInputSchema'
import { TourOrderByWithRelationInputSchema } from '../inputTypeSchemas/TourOrderByWithRelationInputSchema'
import { TourWhereUniqueInputSchema } from '../inputTypeSchemas/TourWhereUniqueInputSchema'

export const TourAggregateArgsSchema: z.ZodType<Prisma.TourAggregateArgs> = z.object({
  where: TourWhereInputSchema.optional(),
  orderBy: z.union([ TourOrderByWithRelationInputSchema.array(),TourOrderByWithRelationInputSchema ]).optional(),
  cursor: TourWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default TourAggregateArgsSchema;
