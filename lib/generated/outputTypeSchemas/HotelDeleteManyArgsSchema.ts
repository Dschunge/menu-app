import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { HotelWhereInputSchema } from '../inputTypeSchemas/HotelWhereInputSchema'

export const HotelDeleteManyArgsSchema: z.ZodType<Prisma.HotelDeleteManyArgs> = z.object({
  where: HotelWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default HotelDeleteManyArgsSchema;
