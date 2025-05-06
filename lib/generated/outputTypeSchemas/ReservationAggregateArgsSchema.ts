import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { ReservationWhereInputSchema } from '../inputTypeSchemas/ReservationWhereInputSchema'
import { ReservationOrderByWithRelationInputSchema } from '../inputTypeSchemas/ReservationOrderByWithRelationInputSchema'
import { ReservationWhereUniqueInputSchema } from '../inputTypeSchemas/ReservationWhereUniqueInputSchema'

export const ReservationAggregateArgsSchema: z.ZodType<Prisma.ReservationAggregateArgs> = z.object({
  where: ReservationWhereInputSchema.optional(),
  orderBy: z.union([ ReservationOrderByWithRelationInputSchema.array(),ReservationOrderByWithRelationInputSchema ]).optional(),
  cursor: ReservationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ReservationAggregateArgsSchema;
