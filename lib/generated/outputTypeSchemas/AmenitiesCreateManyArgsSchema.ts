import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { AmenitiesCreateManyInputSchema } from '../inputTypeSchemas/AmenitiesCreateManyInputSchema'

export const AmenitiesCreateManyArgsSchema: z.ZodType<Prisma.AmenitiesCreateManyArgs> = z.object({
  data: z.union([ AmenitiesCreateManyInputSchema,AmenitiesCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default AmenitiesCreateManyArgsSchema;
