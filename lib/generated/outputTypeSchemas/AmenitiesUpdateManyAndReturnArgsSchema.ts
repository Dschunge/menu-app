import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { AmenitiesUpdateManyMutationInputSchema } from '../inputTypeSchemas/AmenitiesUpdateManyMutationInputSchema'
import { AmenitiesUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/AmenitiesUncheckedUpdateManyInputSchema'
import { AmenitiesWhereInputSchema } from '../inputTypeSchemas/AmenitiesWhereInputSchema'

export const AmenitiesUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.AmenitiesUpdateManyAndReturnArgs> = z.object({
  data: z.union([ AmenitiesUpdateManyMutationInputSchema,AmenitiesUncheckedUpdateManyInputSchema ]),
  where: AmenitiesWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default AmenitiesUpdateManyAndReturnArgsSchema;
