import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TVChannelsUpdateManyMutationInputSchema } from '../inputTypeSchemas/TVChannelsUpdateManyMutationInputSchema'
import { TVChannelsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TVChannelsUncheckedUpdateManyInputSchema'
import { TVChannelsWhereInputSchema } from '../inputTypeSchemas/TVChannelsWhereInputSchema'

export const TVChannelsUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.TVChannelsUpdateManyAndReturnArgs> = z.object({
  data: z.union([ TVChannelsUpdateManyMutationInputSchema,TVChannelsUncheckedUpdateManyInputSchema ]),
  where: TVChannelsWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default TVChannelsUpdateManyAndReturnArgsSchema;
