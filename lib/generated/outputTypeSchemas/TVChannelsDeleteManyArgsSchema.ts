import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TVChannelsWhereInputSchema } from '../inputTypeSchemas/TVChannelsWhereInputSchema'

export const TVChannelsDeleteManyArgsSchema: z.ZodType<Prisma.TVChannelsDeleteManyArgs> = z.object({
  where: TVChannelsWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default TVChannelsDeleteManyArgsSchema;
