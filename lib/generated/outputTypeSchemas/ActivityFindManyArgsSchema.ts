import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { ActivityIncludeSchema } from '../inputTypeSchemas/ActivityIncludeSchema'
import { ActivityWhereInputSchema } from '../inputTypeSchemas/ActivityWhereInputSchema'
import { ActivityOrderByWithRelationInputSchema } from '../inputTypeSchemas/ActivityOrderByWithRelationInputSchema'
import { ActivityWhereUniqueInputSchema } from '../inputTypeSchemas/ActivityWhereUniqueInputSchema'
import { ActivityScalarFieldEnumSchema } from '../inputTypeSchemas/ActivityScalarFieldEnumSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { HotelArgsSchema } from "../outputTypeSchemas/HotelArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ActivitySelectSchema: z.ZodType<Prisma.ActivitySelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  name_esp: z.boolean().optional(),
  description: z.boolean().optional(),
  description_esp: z.boolean().optional(),
  image: z.boolean().optional(),
  profileImage: z.boolean().optional(),
  hotelId: z.boolean().optional(),
  type: z.boolean().optional(),
  start: z.boolean().optional(),
  end: z.boolean().optional(),
  price: z.boolean().optional(),
  cashOnly: z.boolean().optional(),
  freeOfCharge: z.boolean().optional(),
  location: z.boolean().optional(),
  isRecurring: z.boolean().optional(),
  recurrencePattern: z.boolean().optional(),
  recurrenceDays: z.boolean().optional(),
  recurrenceEndDate: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  Hotel: z.union([z.boolean(),z.lazy(() => HotelArgsSchema)]).optional(),
}).strict()

export const ActivityFindManyArgsSchema: z.ZodType<Prisma.ActivityFindManyArgs> = z.object({
  select: ActivitySelectSchema.optional(),
  include: z.lazy(() => ActivityIncludeSchema).optional(),
  where: ActivityWhereInputSchema.optional(),
  orderBy: z.union([ ActivityOrderByWithRelationInputSchema.array(),ActivityOrderByWithRelationInputSchema ]).optional(),
  cursor: ActivityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ActivityScalarFieldEnumSchema,ActivityScalarFieldEnumSchema.array() ]).optional(),
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export default ActivityFindManyArgsSchema;
