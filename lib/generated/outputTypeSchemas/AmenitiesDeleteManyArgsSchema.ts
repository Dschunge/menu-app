import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { AmenitiesWhereInputSchema } from '../inputTypeSchemas/AmenitiesWhereInputSchema'

export const AmenitiesDeleteManyArgsSchema: z.ZodType<Prisma.AmenitiesDeleteManyArgs> = z.object({
  where: AmenitiesWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default AmenitiesDeleteManyArgsSchema;
