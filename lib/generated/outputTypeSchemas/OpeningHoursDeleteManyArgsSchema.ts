import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { OpeningHoursWhereInputSchema } from '../inputTypeSchemas/OpeningHoursWhereInputSchema'

export const OpeningHoursDeleteManyArgsSchema: z.ZodType<Prisma.OpeningHoursDeleteManyArgs> = z.object({
  where: OpeningHoursWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default OpeningHoursDeleteManyArgsSchema;
