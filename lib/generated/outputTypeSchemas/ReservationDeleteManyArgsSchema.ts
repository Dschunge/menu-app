import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { ReservationWhereInputSchema } from '../inputTypeSchemas/ReservationWhereInputSchema'

export const ReservationDeleteManyArgsSchema: z.ZodType<Prisma.ReservationDeleteManyArgs> = z.object({
  where: ReservationWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default ReservationDeleteManyArgsSchema;
