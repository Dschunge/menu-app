import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { SpaUpdateManyMutationInputSchema } from '../inputTypeSchemas/SpaUpdateManyMutationInputSchema'
import { SpaUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SpaUncheckedUpdateManyInputSchema'
import { SpaWhereInputSchema } from '../inputTypeSchemas/SpaWhereInputSchema'

export const SpaUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.SpaUpdateManyAndReturnArgs> = z.object({
  data: z.union([ SpaUpdateManyMutationInputSchema,SpaUncheckedUpdateManyInputSchema ]),
  where: SpaWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default SpaUpdateManyAndReturnArgsSchema;
