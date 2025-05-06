import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { RestaurantUpdateManyMutationInputSchema } from '../inputTypeSchemas/RestaurantUpdateManyMutationInputSchema'
import { RestaurantUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/RestaurantUncheckedUpdateManyInputSchema'
import { RestaurantWhereInputSchema } from '../inputTypeSchemas/RestaurantWhereInputSchema'

export const RestaurantUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.RestaurantUpdateManyAndReturnArgs> = z.object({
  data: z.union([ RestaurantUpdateManyMutationInputSchema,RestaurantUncheckedUpdateManyInputSchema ]),
  where: RestaurantWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default RestaurantUpdateManyAndReturnArgsSchema;
