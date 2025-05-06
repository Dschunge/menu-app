import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { OpeningHoursCreateManyInputSchema } from '../inputTypeSchemas/OpeningHoursCreateManyInputSchema'

export const OpeningHoursCreateManyArgsSchema: z.ZodType<Prisma.OpeningHoursCreateManyArgs> = z.object({
  data: z.union([ OpeningHoursCreateManyInputSchema,OpeningHoursCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default OpeningHoursCreateManyArgsSchema;
