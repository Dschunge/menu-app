import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { OpeningHoursIncludeSchema } from '../inputTypeSchemas/OpeningHoursIncludeSchema'
import { OpeningHoursUpdateInputSchema } from '../inputTypeSchemas/OpeningHoursUpdateInputSchema'
import { OpeningHoursUncheckedUpdateInputSchema } from '../inputTypeSchemas/OpeningHoursUncheckedUpdateInputSchema'
import { OpeningHoursWhereUniqueInputSchema } from '../inputTypeSchemas/OpeningHoursWhereUniqueInputSchema'
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

export const OpeningHoursUpdateArgsSchema: z.ZodType<Prisma.OpeningHoursUpdateArgs> = z.object({
  select: OpeningHoursSelectSchema.optional(),
  include: z.lazy(() => OpeningHoursIncludeSchema).optional(),
  data: z.union([ OpeningHoursUpdateInputSchema,OpeningHoursUncheckedUpdateInputSchema ]),
  where: OpeningHoursWhereUniqueInputSchema,
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export default OpeningHoursUpdateArgsSchema;
