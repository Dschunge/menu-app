import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { HotelUpdateManyMutationInputSchema } from '../inputTypeSchemas/HotelUpdateManyMutationInputSchema'
import { HotelUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/HotelUncheckedUpdateManyInputSchema'
import { HotelWhereInputSchema } from '../inputTypeSchemas/HotelWhereInputSchema'

export const HotelUpdateManyArgsSchema: z.ZodType<Prisma.HotelUpdateManyArgs> = z.object({
  data: z.union([ HotelUpdateManyMutationInputSchema,HotelUncheckedUpdateManyInputSchema ]),
  where: HotelWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default HotelUpdateManyArgsSchema;
