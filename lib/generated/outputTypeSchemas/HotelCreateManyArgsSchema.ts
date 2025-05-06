import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { HotelCreateManyInputSchema } from '../inputTypeSchemas/HotelCreateManyInputSchema'

export const HotelCreateManyArgsSchema: z.ZodType<Prisma.HotelCreateManyArgs> = z.object({
  data: z.union([ HotelCreateManyInputSchema,HotelCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default HotelCreateManyArgsSchema;
