import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { HotelCreateManyInputSchema } from '../inputTypeSchemas/HotelCreateManyInputSchema'

export const HotelCreateManyAndReturnArgsSchema: z.ZodType<Prisma.HotelCreateManyAndReturnArgs> = z.object({
  data: z.union([ HotelCreateManyInputSchema,HotelCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default HotelCreateManyAndReturnArgsSchema;
