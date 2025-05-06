import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { HotelWhereInputSchema } from '../inputTypeSchemas/HotelWhereInputSchema'
import { HotelOrderByWithRelationInputSchema } from '../inputTypeSchemas/HotelOrderByWithRelationInputSchema'
import { HotelWhereUniqueInputSchema } from '../inputTypeSchemas/HotelWhereUniqueInputSchema'

export const HotelAggregateArgsSchema: z.ZodType<Prisma.HotelAggregateArgs> = z.object({
  where: HotelWhereInputSchema.optional(),
  orderBy: z.union([ HotelOrderByWithRelationInputSchema.array(),HotelOrderByWithRelationInputSchema ]).optional(),
  cursor: HotelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default HotelAggregateArgsSchema;
