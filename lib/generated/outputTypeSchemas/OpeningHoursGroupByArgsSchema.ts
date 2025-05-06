import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { OpeningHoursWhereInputSchema } from '../inputTypeSchemas/OpeningHoursWhereInputSchema'
import { OpeningHoursOrderByWithAggregationInputSchema } from '../inputTypeSchemas/OpeningHoursOrderByWithAggregationInputSchema'
import { OpeningHoursScalarFieldEnumSchema } from '../inputTypeSchemas/OpeningHoursScalarFieldEnumSchema'
import { OpeningHoursScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/OpeningHoursScalarWhereWithAggregatesInputSchema'

export const OpeningHoursGroupByArgsSchema: z.ZodType<Prisma.OpeningHoursGroupByArgs> = z.object({
  where: OpeningHoursWhereInputSchema.optional(),
  orderBy: z.union([ OpeningHoursOrderByWithAggregationInputSchema.array(),OpeningHoursOrderByWithAggregationInputSchema ]).optional(),
  by: OpeningHoursScalarFieldEnumSchema.array(),
  having: OpeningHoursScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default OpeningHoursGroupByArgsSchema;
