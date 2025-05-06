import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { HotelWhereInputSchema } from '../inputTypeSchemas/HotelWhereInputSchema'
import { HotelOrderByWithAggregationInputSchema } from '../inputTypeSchemas/HotelOrderByWithAggregationInputSchema'
import { HotelScalarFieldEnumSchema } from '../inputTypeSchemas/HotelScalarFieldEnumSchema'
import { HotelScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/HotelScalarWhereWithAggregatesInputSchema'

export const HotelGroupByArgsSchema: z.ZodType<Prisma.HotelGroupByArgs> = z.object({
  where: HotelWhereInputSchema.optional(),
  orderBy: z.union([ HotelOrderByWithAggregationInputSchema.array(),HotelOrderByWithAggregationInputSchema ]).optional(),
  by: HotelScalarFieldEnumSchema.array(),
  having: HotelScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default HotelGroupByArgsSchema;
