import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { AmenitiesUpdateManyMutationInputSchema } from '../inputTypeSchemas/AmenitiesUpdateManyMutationInputSchema'
import { AmenitiesUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/AmenitiesUncheckedUpdateManyInputSchema'
import { AmenitiesWhereInputSchema } from '../inputTypeSchemas/AmenitiesWhereInputSchema'

export const AmenitiesUpdateManyArgsSchema: z.ZodType<Prisma.AmenitiesUpdateManyArgs> = z.object({
  data: z.union([ AmenitiesUpdateManyMutationInputSchema,AmenitiesUncheckedUpdateManyInputSchema ]),
  where: AmenitiesWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default AmenitiesUpdateManyArgsSchema;
