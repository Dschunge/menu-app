import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { ActivityCreateManyInputSchema } from '../inputTypeSchemas/ActivityCreateManyInputSchema'

export const ActivityCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ActivityCreateManyAndReturnArgs> = z.object({
  data: z.union([ ActivityCreateManyInputSchema,ActivityCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default ActivityCreateManyAndReturnArgsSchema;
