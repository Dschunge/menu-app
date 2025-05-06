import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { AmenitiesWhereInputSchema } from '../inputTypeSchemas/AmenitiesWhereInputSchema'
import { AmenitiesOrderByWithRelationInputSchema } from '../inputTypeSchemas/AmenitiesOrderByWithRelationInputSchema'
import { AmenitiesWhereUniqueInputSchema } from '../inputTypeSchemas/AmenitiesWhereUniqueInputSchema'

export const AmenitiesAggregateArgsSchema: z.ZodType<Prisma.AmenitiesAggregateArgs> = z.object({
  where: AmenitiesWhereInputSchema.optional(),
  orderBy: z.union([ AmenitiesOrderByWithRelationInputSchema.array(),AmenitiesOrderByWithRelationInputSchema ]).optional(),
  cursor: AmenitiesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default AmenitiesAggregateArgsSchema;
