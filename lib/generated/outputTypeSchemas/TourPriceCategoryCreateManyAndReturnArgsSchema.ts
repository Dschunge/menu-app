import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TourPriceCategoryCreateManyInputSchema } from '../inputTypeSchemas/TourPriceCategoryCreateManyInputSchema'

export const TourPriceCategoryCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TourPriceCategoryCreateManyAndReturnArgs> = z.object({
  data: z.union([ TourPriceCategoryCreateManyInputSchema,TourPriceCategoryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default TourPriceCategoryCreateManyAndReturnArgsSchema;
