import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { AmenitiesIncludeSchema } from '../inputTypeSchemas/AmenitiesIncludeSchema'
import { AmenitiesWhereUniqueInputSchema } from '../inputTypeSchemas/AmenitiesWhereUniqueInputSchema'
import { AmenitiesCreateInputSchema } from '../inputTypeSchemas/AmenitiesCreateInputSchema'
import { AmenitiesUncheckedCreateInputSchema } from '../inputTypeSchemas/AmenitiesUncheckedCreateInputSchema'
import { AmenitiesUpdateInputSchema } from '../inputTypeSchemas/AmenitiesUpdateInputSchema'
import { AmenitiesUncheckedUpdateInputSchema } from '../inputTypeSchemas/AmenitiesUncheckedUpdateInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { HotelArgsSchema } from "../outputTypeSchemas/HotelArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AmenitiesSelectSchema: z.ZodType<Prisma.AmenitiesSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  icon: z.boolean().optional(),
  image: z.boolean().optional(),
  amenitiestype: z.boolean().optional(),
  hotelId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  Hotel: z.union([z.boolean(),z.lazy(() => HotelArgsSchema)]).optional(),
}).strict()

export const AmenitiesUpsertArgsSchema: z.ZodType<Prisma.AmenitiesUpsertArgs> = z.object({
  select: AmenitiesSelectSchema.optional(),
  include: z.lazy(() => AmenitiesIncludeSchema).optional(),
  where: AmenitiesWhereUniqueInputSchema,
  create: z.union([ AmenitiesCreateInputSchema,AmenitiesUncheckedCreateInputSchema ]),
  update: z.union([ AmenitiesUpdateInputSchema,AmenitiesUncheckedUpdateInputSchema ]),
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export default AmenitiesUpsertArgsSchema;
