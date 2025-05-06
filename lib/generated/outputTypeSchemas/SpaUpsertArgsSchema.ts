import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { SpaIncludeSchema } from '../inputTypeSchemas/SpaIncludeSchema'
import { SpaWhereUniqueInputSchema } from '../inputTypeSchemas/SpaWhereUniqueInputSchema'
import { SpaCreateInputSchema } from '../inputTypeSchemas/SpaCreateInputSchema'
import { SpaUncheckedCreateInputSchema } from '../inputTypeSchemas/SpaUncheckedCreateInputSchema'
import { SpaUpdateInputSchema } from '../inputTypeSchemas/SpaUpdateInputSchema'
import { SpaUncheckedUpdateInputSchema } from '../inputTypeSchemas/SpaUncheckedUpdateInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { SpaPriceCategoryFindManyArgsSchema } from "../outputTypeSchemas/SpaPriceCategoryFindManyArgsSchema"
import { HotelArgsSchema } from "../outputTypeSchemas/HotelArgsSchema"
import { SpaCountOutputTypeArgsSchema } from "../outputTypeSchemas/SpaCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SpaSelectSchema: z.ZodType<Prisma.SpaSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  name_esp: z.boolean().optional(),
  description: z.boolean().optional(),
  description_esp: z.boolean().optional(),
  hotelId: z.boolean().optional(),
  type: z.boolean().optional(),
  videos: z.boolean().optional(),
  images: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  pricecategory: z.union([z.boolean(),z.lazy(() => SpaPriceCategoryFindManyArgsSchema)]).optional(),
  Hotel: z.union([z.boolean(),z.lazy(() => HotelArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SpaCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const SpaUpsertArgsSchema: z.ZodType<Prisma.SpaUpsertArgs> = z.object({
  select: SpaSelectSchema.optional(),
  include: z.lazy(() => SpaIncludeSchema).optional(),
  where: SpaWhereUniqueInputSchema,
  create: z.union([ SpaCreateInputSchema,SpaUncheckedCreateInputSchema ]),
  update: z.union([ SpaUpdateInputSchema,SpaUncheckedUpdateInputSchema ]),
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export default SpaUpsertArgsSchema;
