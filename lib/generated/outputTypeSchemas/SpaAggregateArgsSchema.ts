import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { SpaWhereInputSchema } from '../inputTypeSchemas/SpaWhereInputSchema'
import { SpaOrderByWithRelationInputSchema } from '../inputTypeSchemas/SpaOrderByWithRelationInputSchema'
import { SpaWhereUniqueInputSchema } from '../inputTypeSchemas/SpaWhereUniqueInputSchema'

export const SpaAggregateArgsSchema: z.ZodType<Prisma.SpaAggregateArgs> = z.object({
  where: SpaWhereInputSchema.optional(),
  orderBy: z.union([ SpaOrderByWithRelationInputSchema.array(),SpaOrderByWithRelationInputSchema ]).optional(),
  cursor: SpaWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default SpaAggregateArgsSchema;
