import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TourUpdateManyMutationInputSchema } from '../inputTypeSchemas/TourUpdateManyMutationInputSchema'
import { TourUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TourUncheckedUpdateManyInputSchema'
import { TourWhereInputSchema } from '../inputTypeSchemas/TourWhereInputSchema'

export const TourUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.TourUpdateManyAndReturnArgs> = z.object({
  data: z.union([ TourUpdateManyMutationInputSchema,TourUncheckedUpdateManyInputSchema ]),
  where: TourWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default TourUpdateManyAndReturnArgsSchema;
