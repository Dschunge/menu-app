import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { SubSubcategoryWhereInputSchema } from '../inputTypeSchemas/SubSubcategoryWhereInputSchema'

export const SubSubcategoryDeleteManyArgsSchema: z.ZodType<Prisma.SubSubcategoryDeleteManyArgs> = z.object({
  where: SubSubcategoryWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default SubSubcategoryDeleteManyArgsSchema;
