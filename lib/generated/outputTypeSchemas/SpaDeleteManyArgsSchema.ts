import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { SpaWhereInputSchema } from '../inputTypeSchemas/SpaWhereInputSchema'

export const SpaDeleteManyArgsSchema: z.ZodType<Prisma.SpaDeleteManyArgs> = z.object({
  where: SpaWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default SpaDeleteManyArgsSchema;
