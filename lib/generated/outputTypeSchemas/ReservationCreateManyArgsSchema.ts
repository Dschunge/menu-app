import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { ReservationCreateManyInputSchema } from '../inputTypeSchemas/ReservationCreateManyInputSchema'

export const ReservationCreateManyArgsSchema: z.ZodType<Prisma.ReservationCreateManyArgs> = z.object({
  data: z.union([ ReservationCreateManyInputSchema,ReservationCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default ReservationCreateManyArgsSchema;
