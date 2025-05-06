import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { CustomerIncludeSchema } from '../inputTypeSchemas/CustomerIncludeSchema'
import { CustomerWhereUniqueInputSchema } from '../inputTypeSchemas/CustomerWhereUniqueInputSchema'
import { CustomerCreateInputSchema } from '../inputTypeSchemas/CustomerCreateInputSchema'
import { CustomerUncheckedCreateInputSchema } from '../inputTypeSchemas/CustomerUncheckedCreateInputSchema'
import { CustomerUpdateInputSchema } from '../inputTypeSchemas/CustomerUpdateInputSchema'
import { CustomerUncheckedUpdateInputSchema } from '../inputTypeSchemas/CustomerUncheckedUpdateInputSchema'
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

export const CustomerUpsertArgsSchema: z.ZodType<Prisma.CustomerUpsertArgs> = z.object({
  select: CustomerSelectSchema.optional(),
  include: z.lazy(() => CustomerIncludeSchema).optional(),
  where: CustomerWhereUniqueInputSchema,
  create: z.union([ CustomerCreateInputSchema,CustomerUncheckedCreateInputSchema ]),
  update: z.union([ CustomerUpdateInputSchema,CustomerUncheckedUpdateInputSchema ]),
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export default CustomerUpsertArgsSchema;
