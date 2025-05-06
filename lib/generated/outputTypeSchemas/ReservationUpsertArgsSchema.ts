import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { ReservationIncludeSchema } from '../inputTypeSchemas/ReservationIncludeSchema'
import { ReservationWhereUniqueInputSchema } from '../inputTypeSchemas/ReservationWhereUniqueInputSchema'
import { ReservationCreateInputSchema } from '../inputTypeSchemas/ReservationCreateInputSchema'
import { ReservationUncheckedCreateInputSchema } from '../inputTypeSchemas/ReservationUncheckedCreateInputSchema'
import { ReservationUpdateInputSchema } from '../inputTypeSchemas/ReservationUpdateInputSchema'
import { ReservationUncheckedUpdateInputSchema } from '../inputTypeSchemas/ReservationUncheckedUpdateInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { CustomerArgsSchema } from "../outputTypeSchemas/CustomerArgsSchema"
import { TableArgsSchema } from "../outputTypeSchemas/TableArgsSchema"
import { RestaurantArgsSchema } from "../outputTypeSchemas/RestaurantArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ReservationSelectSchema: z.ZodType<Prisma.ReservationSelect> = z.object({
  id: z.boolean().optional(),
  date: z.boolean().optional(),
  startTime: z.boolean().optional(),
  endTime: z.boolean().optional(),
  partySize: z.boolean().optional(),
  status: z.boolean().optional(),
  notes: z.boolean().optional(),
  customerId: z.boolean().optional(),
  tableId: z.boolean().optional(),
  restaurantId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  customer: z.union([z.boolean(),z.lazy(() => CustomerArgsSchema)]).optional(),
  table: z.union([z.boolean(),z.lazy(() => TableArgsSchema)]).optional(),
  restaurant: z.union([z.boolean(),z.lazy(() => RestaurantArgsSchema)]).optional(),
}).strict()

export const ReservationUpsertArgsSchema: z.ZodType<Prisma.ReservationUpsertArgs> = z.object({
  select: ReservationSelectSchema.optional(),
  include: z.lazy(() => ReservationIncludeSchema).optional(),
  where: ReservationWhereUniqueInputSchema,
  create: z.union([ ReservationCreateInputSchema,ReservationUncheckedCreateInputSchema ]),
  update: z.union([ ReservationUpdateInputSchema,ReservationUncheckedUpdateInputSchema ]),
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export default ReservationUpsertArgsSchema;
