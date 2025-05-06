import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { OpeningHoursUpdateManyMutationInputSchema } from '../inputTypeSchemas/OpeningHoursUpdateManyMutationInputSchema'
import { OpeningHoursUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/OpeningHoursUncheckedUpdateManyInputSchema'
import { OpeningHoursWhereInputSchema } from '../inputTypeSchemas/OpeningHoursWhereInputSchema'

export const OpeningHoursUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.OpeningHoursUpdateManyAndReturnArgs> = z.object({
  data: z.union([ OpeningHoursUpdateManyMutationInputSchema,OpeningHoursUncheckedUpdateManyInputSchema ]),
  where: OpeningHoursWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default OpeningHoursUpdateManyAndReturnArgsSchema;
