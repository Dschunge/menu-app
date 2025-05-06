import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { OpeningHoursIncludeSchema } from '../inputTypeSchemas/OpeningHoursIncludeSchema'
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

export const OpeningHoursFindUniqueArgsSchema: z.ZodType<Prisma.OpeningHoursFindUniqueArgs> = z.object({
  select: OpeningHoursSelectSchema.optional(),
  include: z.lazy(() => OpeningHoursIncludeSchema).optional(),
  where: OpeningHoursWhereUniqueInputSchema,
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export default OpeningHoursFindUniqueArgsSchema;
