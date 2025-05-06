import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { SpaPriceCategoryWhereInputSchema } from '../inputTypeSchemas/SpaPriceCategoryWhereInputSchema'

export const SpaPriceCategoryDeleteManyArgsSchema: z.ZodType<Prisma.SpaPriceCategoryDeleteManyArgs> = z.object({
  where: SpaPriceCategoryWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default SpaPriceCategoryDeleteManyArgsSchema;
