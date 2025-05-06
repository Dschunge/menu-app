import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { SubSubcategoryUpdateManyMutationInputSchema } from '../inputTypeSchemas/SubSubcategoryUpdateManyMutationInputSchema'
import { SubSubcategoryUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SubSubcategoryUncheckedUpdateManyInputSchema'
import { SubSubcategoryWhereInputSchema } from '../inputTypeSchemas/SubSubcategoryWhereInputSchema'

export const SubSubcategoryUpdateManyArgsSchema: z.ZodType<Prisma.SubSubcategoryUpdateManyArgs> = z.object({
  data: z.union([ SubSubcategoryUpdateManyMutationInputSchema,SubSubcategoryUncheckedUpdateManyInputSchema ]),
  where: SubSubcategoryWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default SubSubcategoryUpdateManyArgsSchema;
