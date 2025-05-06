import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { SubcategoryWhereInputSchema } from '../inputTypeSchemas/SubcategoryWhereInputSchema'

export const SubcategoryDeleteManyArgsSchema: z.ZodType<Prisma.SubcategoryDeleteManyArgs> = z.object({
  where: SubcategoryWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default SubcategoryDeleteManyArgsSchema;
