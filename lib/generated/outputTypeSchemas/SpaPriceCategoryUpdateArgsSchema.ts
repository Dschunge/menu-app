import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { SpaPriceCategoryIncludeSchema } from '../inputTypeSchemas/SpaPriceCategoryIncludeSchema'
import { SpaPriceCategoryUpdateInputSchema } from '../inputTypeSchemas/SpaPriceCategoryUpdateInputSchema'
import { SpaPriceCategoryUncheckedUpdateInputSchema } from '../inputTypeSchemas/SpaPriceCategoryUncheckedUpdateInputSchema'
import { SpaPriceCategoryWhereUniqueInputSchema } from '../inputTypeSchemas/SpaPriceCategoryWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { SpaArgsSchema } from "../outputTypeSchemas/SpaArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SpaPriceCategorySelectSchema: z.ZodType<Prisma.SpaPriceCategorySelect> = z.object({
  id: z.boolean().optional(),
  sku: z.boolean().optional(),
  price: z.boolean().optional(),
  description: z.boolean().optional(),
  description_esp: z.boolean().optional(),
  duration: z.boolean().optional(),
  spaId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  spa: z.union([z.boolean(),z.lazy(() => SpaArgsSchema)]).optional(),
}).strict()

export const SpaPriceCategoryUpdateArgsSchema: z.ZodType<Prisma.SpaPriceCategoryUpdateArgs> = z.object({
  select: SpaPriceCategorySelectSchema.optional(),
  include: z.lazy(() => SpaPriceCategoryIncludeSchema).optional(),
  data: z.union([ SpaPriceCategoryUpdateInputSchema,SpaPriceCategoryUncheckedUpdateInputSchema ]),
  where: SpaPriceCategoryWhereUniqueInputSchema,
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export default SpaPriceCategoryUpdateArgsSchema;
