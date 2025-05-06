import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { CustomerIncludeSchema } from '../inputTypeSchemas/CustomerIncludeSchema'
import { CustomerWhereInputSchema } from '../inputTypeSchemas/CustomerWhereInputSchema'
import { CustomerOrderByWithRelationInputSchema } from '../inputTypeSchemas/CustomerOrderByWithRelationInputSchema'
import { CustomerWhereUniqueInputSchema } from '../inputTypeSchemas/CustomerWhereUniqueInputSchema'
import { CustomerScalarFieldEnumSchema } from '../inputTypeSchemas/CustomerScalarFieldEnumSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { ReservationFindManyArgsSchema } from "../outputTypeSchemas/ReservationFindManyArgsSchema"
import { CustomerCountOutputTypeArgsSchema } from "../outputTypeSchemas/CustomerCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CustomerSelectSchema: z.ZodType<Prisma.CustomerSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  phone: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  reservations: z.union([z.boolean(),z.lazy(() => ReservationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CustomerCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const CustomerFindManyArgsSchema: z.ZodType<Prisma.CustomerFindManyArgs> = z.object({
  select: CustomerSelectSchema.optional(),
  include: z.lazy(() => CustomerIncludeSchema).optional(),
  where: CustomerWhereInputSchema.optional(),
  orderBy: z.union([ CustomerOrderByWithRelationInputSchema.array(),CustomerOrderByWithRelationInputSchema ]).optional(),
  cursor: CustomerWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CustomerScalarFieldEnumSchema,CustomerScalarFieldEnumSchema.array() ]).optional(),
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export default CustomerFindManyArgsSchema;
