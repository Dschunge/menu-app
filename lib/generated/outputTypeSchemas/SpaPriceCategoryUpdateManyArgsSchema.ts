import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { SpaPriceCategoryUpdateManyMutationInputSchema } from '../inputTypeSchemas/SpaPriceCategoryUpdateManyMutationInputSchema'
import { SpaPriceCategoryUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SpaPriceCategoryUncheckedUpdateManyInputSchema'
import { SpaPriceCategoryWhereInputSchema } from '../inputTypeSchemas/SpaPriceCategoryWhereInputSchema'

export const SpaPriceCategoryUpdateManyArgsSchema: z.ZodType<Prisma.SpaPriceCategoryUpdateManyArgs> = z.object({
  data: z.union([ SpaPriceCategoryUpdateManyMutationInputSchema,SpaPriceCategoryUncheckedUpdateManyInputSchema ]),
  where: SpaPriceCategoryWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default SpaPriceCategoryUpdateManyArgsSchema;
