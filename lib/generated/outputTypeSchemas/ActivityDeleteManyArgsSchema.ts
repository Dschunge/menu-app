import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { ActivityWhereInputSchema } from '../inputTypeSchemas/ActivityWhereInputSchema'

export const ActivityDeleteManyArgsSchema: z.ZodType<Prisma.ActivityDeleteManyArgs> = z.object({
  where: ActivityWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default ActivityDeleteManyArgsSchema;
