import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { DishUpdateManyMutationInputSchema } from '../inputTypeSchemas/DishUpdateManyMutationInputSchema'
import { DishUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/DishUncheckedUpdateManyInputSchema'
import { DishWhereInputSchema } from '../inputTypeSchemas/DishWhereInputSchema'

export const DishUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.DishUpdateManyAndReturnArgs> = z.object({
  data: z.union([ DishUpdateManyMutationInputSchema,DishUncheckedUpdateManyInputSchema ]),
  where: DishWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default DishUpdateManyAndReturnArgsSchema;
