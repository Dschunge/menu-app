import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { SpaPriceCategoryCreateManyInputSchema } from '../inputTypeSchemas/SpaPriceCategoryCreateManyInputSchema'

export const SpaPriceCategoryCreateManyAndReturnArgsSchema: z.ZodType<Prisma.SpaPriceCategoryCreateManyAndReturnArgs> = z.object({
  data: z.union([ SpaPriceCategoryCreateManyInputSchema,SpaPriceCategoryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default SpaPriceCategoryCreateManyAndReturnArgsSchema;
