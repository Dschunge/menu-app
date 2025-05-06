import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { AmenitiesWhereInputSchema } from '../inputTypeSchemas/AmenitiesWhereInputSchema'
import { AmenitiesOrderByWithAggregationInputSchema } from '../inputTypeSchemas/AmenitiesOrderByWithAggregationInputSchema'
import { AmenitiesScalarFieldEnumSchema } from '../inputTypeSchemas/AmenitiesScalarFieldEnumSchema'
import { AmenitiesScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/AmenitiesScalarWhereWithAggregatesInputSchema'

export const AmenitiesGroupByArgsSchema: z.ZodType<Prisma.AmenitiesGroupByArgs> = z.object({
  where: AmenitiesWhereInputSchema.optional(),
  orderBy: z.union([ AmenitiesOrderByWithAggregationInputSchema.array(),AmenitiesOrderByWithAggregationInputSchema ]).optional(),
  by: AmenitiesScalarFieldEnumSchema.array(),
  having: AmenitiesScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default AmenitiesGroupByArgsSchema;
