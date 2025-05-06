import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TourCreateManyInputSchema } from '../inputTypeSchemas/TourCreateManyInputSchema'

export const TourCreateManyArgsSchema: z.ZodType<Prisma.TourCreateManyArgs> = z.object({
  data: z.union([ TourCreateManyInputSchema,TourCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default TourCreateManyArgsSchema;
