import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TourWhereInputSchema } from '../inputTypeSchemas/TourWhereInputSchema'

export const TourDeleteManyArgsSchema: z.ZodType<Prisma.TourDeleteManyArgs> = z.object({
  where: TourWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default TourDeleteManyArgsSchema;
