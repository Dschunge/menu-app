import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TableIncludeSchema } from '../inputTypeSchemas/TableIncludeSchema'
import { TableWhereInputSchema } from '../inputTypeSchemas/TableWhereInputSchema'
import { TableOrderByWithRelationInputSchema } from '../inputTypeSchemas/TableOrderByWithRelationInputSchema'
import { TableWhereUniqueInputSchema } from '../inputTypeSchemas/TableWhereUniqueInputSchema'
import { TableScalarFieldEnumSchema } from '../inputTypeSchemas/TableScalarFieldEnumSchema'
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

export const TableFindManyArgsSchema: z.ZodType<Prisma.TableFindManyArgs> = z.object({
  select: TableSelectSchema.optional(),
  include: z.lazy(() => TableIncludeSchema).optional(),
  where: TableWhereInputSchema.optional(),
  orderBy: z.union([ TableOrderByWithRelationInputSchema.array(),TableOrderByWithRelationInputSchema ]).optional(),
  cursor: TableWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TableScalarFieldEnumSchema,TableScalarFieldEnumSchema.array() ]).optional(),
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export default TableFindManyArgsSchema;
