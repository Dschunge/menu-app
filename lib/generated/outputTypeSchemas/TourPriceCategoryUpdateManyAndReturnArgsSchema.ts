import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TourPriceCategoryUpdateManyMutationInputSchema } from '../inputTypeSchemas/TourPriceCategoryUpdateManyMutationInputSchema'
import { TourPriceCategoryUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TourPriceCategoryUncheckedUpdateManyInputSchema'
import { TourPriceCategoryWhereInputSchema } from '../inputTypeSchemas/TourPriceCategoryWhereInputSchema'

export const TourPriceCategoryUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.TourPriceCategoryUpdateManyAndReturnArgs> = z.object({
  data: z.union([ TourPriceCategoryUpdateManyMutationInputSchema,TourPriceCategoryUncheckedUpdateManyInputSchema ]),
  where: TourPriceCategoryWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default TourPriceCategoryUpdateManyAndReturnArgsSchema;
