import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { OpeningHoursCreateManyInputSchema } from '../inputTypeSchemas/OpeningHoursCreateManyInputSchema'

export const OpeningHoursCreateManyAndReturnArgsSchema: z.ZodType<Prisma.OpeningHoursCreateManyAndReturnArgs> = z.object({
  data: z.union([ OpeningHoursCreateManyInputSchema,OpeningHoursCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default OpeningHoursCreateManyAndReturnArgsSchema;
