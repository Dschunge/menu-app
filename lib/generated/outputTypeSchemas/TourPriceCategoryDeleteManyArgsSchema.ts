import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TourPriceCategoryWhereInputSchema } from '../inputTypeSchemas/TourPriceCategoryWhereInputSchema'

export const TourPriceCategoryDeleteManyArgsSchema: z.ZodType<Prisma.TourPriceCategoryDeleteManyArgs> = z.object({
  where: TourPriceCategoryWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default TourPriceCategoryDeleteManyArgsSchema;
