import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TVChannelsCreateManyInputSchema } from '../inputTypeSchemas/TVChannelsCreateManyInputSchema'

export const TVChannelsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TVChannelsCreateManyAndReturnArgs> = z.object({
  data: z.union([ TVChannelsCreateManyInputSchema,TVChannelsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default TVChannelsCreateManyAndReturnArgsSchema;
