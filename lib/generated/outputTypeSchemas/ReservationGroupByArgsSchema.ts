import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { ReservationWhereInputSchema } from '../inputTypeSchemas/ReservationWhereInputSchema'
import { ReservationOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ReservationOrderByWithAggregationInputSchema'
import { ReservationScalarFieldEnumSchema } from '../inputTypeSchemas/ReservationScalarFieldEnumSchema'
import { ReservationScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ReservationScalarWhereWithAggregatesInputSchema'

export const ReservationGroupByArgsSchema: z.ZodType<Prisma.ReservationGroupByArgs> = z.object({
  where: ReservationWhereInputSchema.optional(),
  orderBy: z.union([ ReservationOrderByWithAggregationInputSchema.array(),ReservationOrderByWithAggregationInputSchema ]).optional(),
  by: ReservationScalarFieldEnumSchema.array(),
  having: ReservationScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ReservationGroupByArgsSchema;
