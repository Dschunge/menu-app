import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { SpaCreateManyInputSchema } from '../inputTypeSchemas/SpaCreateManyInputSchema'

export const SpaCreateManyArgsSchema: z.ZodType<Prisma.SpaCreateManyArgs> = z.object({
  data: z.union([ SpaCreateManyInputSchema,SpaCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default SpaCreateManyArgsSchema;
