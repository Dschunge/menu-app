import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { ActivityUpdateManyMutationInputSchema } from '../inputTypeSchemas/ActivityUpdateManyMutationInputSchema'
import { ActivityUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ActivityUncheckedUpdateManyInputSchema'
import { ActivityWhereInputSchema } from '../inputTypeSchemas/ActivityWhereInputSchema'

export const ActivityUpdateManyArgsSchema: z.ZodType<Prisma.ActivityUpdateManyArgs> = z.object({
  data: z.union([ ActivityUpdateManyMutationInputSchema,ActivityUncheckedUpdateManyInputSchema ]),
  where: ActivityWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default ActivityUpdateManyArgsSchema;
