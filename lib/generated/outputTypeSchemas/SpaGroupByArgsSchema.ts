import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { SpaWhereInputSchema } from '../inputTypeSchemas/SpaWhereInputSchema'
import { SpaOrderByWithAggregationInputSchema } from '../inputTypeSchemas/SpaOrderByWithAggregationInputSchema'
import { SpaScalarFieldEnumSchema } from '../inputTypeSchemas/SpaScalarFieldEnumSchema'
import { SpaScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/SpaScalarWhereWithAggregatesInputSchema'

export const SpaGroupByArgsSchema: z.ZodType<Prisma.SpaGroupByArgs> = z.object({
  where: SpaWhereInputSchema.optional(),
  orderBy: z.union([ SpaOrderByWithAggregationInputSchema.array(),SpaOrderByWithAggregationInputSchema ]).optional(),
  by: SpaScalarFieldEnumSchema.array(),
  having: SpaScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default SpaGroupByArgsSchema;
