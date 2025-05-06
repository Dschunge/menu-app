import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { SpaUpdateManyMutationInputSchema } from '../inputTypeSchemas/SpaUpdateManyMutationInputSchema'
import { SpaUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SpaUncheckedUpdateManyInputSchema'
import { SpaWhereInputSchema } from '../inputTypeSchemas/SpaWhereInputSchema'

export const SpaUpdateManyArgsSchema: z.ZodType<Prisma.SpaUpdateManyArgs> = z.object({
  data: z.union([ SpaUpdateManyMutationInputSchema,SpaUncheckedUpdateManyInputSchema ]),
  where: SpaWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default SpaUpdateManyArgsSchema;
