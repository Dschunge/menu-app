import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TVChannelsCreateManyInputSchema } from '../inputTypeSchemas/TVChannelsCreateManyInputSchema'

export const TVChannelsCreateManyArgsSchema: z.ZodType<Prisma.TVChannelsCreateManyArgs> = z.object({
  data: z.union([ TVChannelsCreateManyInputSchema,TVChannelsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default TVChannelsCreateManyArgsSchema;
