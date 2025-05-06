import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TableIncludeSchema } from '../inputTypeSchemas/TableIncludeSchema'
import { TableUpdateInputSchema } from '../inputTypeSchemas/TableUpdateInputSchema'
import { TableUncheckedUpdateInputSchema } from '../inputTypeSchemas/TableUncheckedUpdateInputSchema'
import { TableWhereUniqueInputSchema } from '../inputTypeSchemas/TableWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { RestaurantArgsSchema } from "../outputTypeSchemas/RestaurantArgsSchema"
import { ReservationFindManyArgsSchema } from "../outputTypeSchemas/ReservationFindManyArgsSchema"
import { TableCountOutputTypeArgsSchema } from "../outputTypeSchemas/TableCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TableSelectSchema: z.ZodType<Prisma.TableSelect> = z.object({
  id: z.boolean().optional(),
  number: z.boolean().optional(),
  capacity: z.boolean().optional(),
  location: z.boolean().optional(),
  isActive: z.boolean().optional(),
  restaurantId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  restaurant: z.union([z.boolean(),z.lazy(() => RestaurantArgsSchema)]).optional(),
  reservations: z.union([z.boolean(),z.lazy(() => ReservationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TableCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const TableUpdateArgsSchema: z.ZodType<Prisma.TableUpdateArgs> = z.object({
  select: TableSelectSchema.optional(),
  include: z.lazy(() => TableIncludeSchema).optional(),
  data: z.union([ TableUpdateInputSchema,TableUncheckedUpdateInputSchema ]),
  where: TableWhereUniqueInputSchema,
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export default TableUpdateArgsSchema;
