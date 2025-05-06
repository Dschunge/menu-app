import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { OpeningHoursIncludeSchema } from '../inputTypeSchemas/OpeningHoursIncludeSchema'
import { OpeningHoursWhereUniqueInputSchema } from '../inputTypeSchemas/OpeningHoursWhereUniqueInputSchema'
import { OpeningHoursCreateInputSchema } from '../inputTypeSchemas/OpeningHoursCreateInputSchema'
import { OpeningHoursUncheckedCreateInputSchema } from '../inputTypeSchemas/OpeningHoursUncheckedCreateInputSchema'
import { OpeningHoursUpdateInputSchema } from '../inputTypeSchemas/OpeningHoursUpdateInputSchema'
import { OpeningHoursUncheckedUpdateInputSchema } from '../inputTypeSchemas/OpeningHoursUncheckedUpdateInputSchema'
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

export const OpeningHoursUpsertArgsSchema: z.ZodType<Prisma.OpeningHoursUpsertArgs> = z.object({
  select: OpeningHoursSelectSchema.optional(),
  include: z.lazy(() => OpeningHoursIncludeSchema).optional(),
  where: OpeningHoursWhereUniqueInputSchema,
  create: z.union([ OpeningHoursCreateInputSchema,OpeningHoursUncheckedCreateInputSchema ]),
  update: z.union([ OpeningHoursUpdateInputSchema,OpeningHoursUncheckedUpdateInputSchema ]),
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export default OpeningHoursUpsertArgsSchema;
