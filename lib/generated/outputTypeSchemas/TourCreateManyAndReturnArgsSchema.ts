import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TourCreateManyInputSchema } from '../inputTypeSchemas/TourCreateManyInputSchema'

export const TourCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TourCreateManyAndReturnArgs> = z.object({
  data: z.union([ TourCreateManyInputSchema,TourCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default TourCreateManyAndReturnArgsSchema;
