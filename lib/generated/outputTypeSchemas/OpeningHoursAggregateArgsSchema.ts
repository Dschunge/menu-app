import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { OpeningHoursWhereInputSchema } from '../inputTypeSchemas/OpeningHoursWhereInputSchema'
import { OpeningHoursOrderByWithRelationInputSchema } from '../inputTypeSchemas/OpeningHoursOrderByWithRelationInputSchema'
import { OpeningHoursWhereUniqueInputSchema } from '../inputTypeSchemas/OpeningHoursWhereUniqueInputSchema'

export const OpeningHoursAggregateArgsSchema: z.ZodType<Prisma.OpeningHoursAggregateArgs> = z.object({
  where: OpeningHoursWhereInputSchema.optional(),
  orderBy: z.union([ OpeningHoursOrderByWithRelationInputSchema.array(),OpeningHoursOrderByWithRelationInputSchema ]).optional(),
  cursor: OpeningHoursWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default OpeningHoursAggregateArgsSchema;
