import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { ReservationUpdateManyMutationInputSchema } from '../inputTypeSchemas/ReservationUpdateManyMutationInputSchema'
import { ReservationUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ReservationUncheckedUpdateManyInputSchema'
import { ReservationWhereInputSchema } from '../inputTypeSchemas/ReservationWhereInputSchema'

export const ReservationUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ReservationUpdateManyAndReturnArgs> = z.object({
  data: z.union([ ReservationUpdateManyMutationInputSchema,ReservationUncheckedUpdateManyInputSchema ]),
  where: ReservationWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default ReservationUpdateManyAndReturnArgsSchema;
