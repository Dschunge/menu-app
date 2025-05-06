import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { OpeningHoursIncludeSchema } from '../inputTypeSchemas/OpeningHoursIncludeSchema'
import { OpeningHoursWhereInputSchema } from '../inputTypeSchemas/OpeningHoursWhereInputSchema'
import { OpeningHoursOrderByWithRelationInputSchema } from '../inputTypeSchemas/OpeningHoursOrderByWithRelationInputSchema'
import { OpeningHoursWhereUniqueInputSchema } from '../inputTypeSchemas/OpeningHoursWhereUniqueInputSchema'
import { OpeningHoursScalarFieldEnumSchema } from '../inputTypeSchemas/OpeningHoursScalarFieldEnumSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { RestaurantArgsSchema } from "../outputTypeSchemas/RestaurantArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const OpeningHoursSelectSchema: z.ZodType<Prisma.OpeningHoursSelect> = z.object({
  id: z.boolean().optional(),
  dayOfWeek: z.boolean().optional(),
  openTime: z.boolean().optional(),
  closeTime: z.boolean().optional(),
  isClosed: z.boolean().optional(),
  restaurantId: z.boolean().optional(),
  restaurant: z.union([z.boolean(),z.lazy(() => RestaurantArgsSchema)]).optional(),
}).strict()

export const OpeningHoursFindManyArgsSchema: z.ZodType<Prisma.OpeningHoursFindManyArgs> = z.object({
  select: OpeningHoursSelectSchema.optional(),
  include: z.lazy(() => OpeningHoursIncludeSchema).optional(),
  where: OpeningHoursWhereInputSchema.optional(),
  orderBy: z.union([ OpeningHoursOrderByWithRelationInputSchema.array(),OpeningHoursOrderByWithRelationInputSchema ]).optional(),
  cursor: OpeningHoursWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OpeningHoursScalarFieldEnumSchema,OpeningHoursScalarFieldEnumSchema.array() ]).optional(),
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export default OpeningHoursFindManyArgsSchema;
