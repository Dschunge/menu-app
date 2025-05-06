import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { SubcategoryUpdateManyMutationInputSchema } from '../inputTypeSchemas/SubcategoryUpdateManyMutationInputSchema'
import { SubcategoryUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SubcategoryUncheckedUpdateManyInputSchema'
import { SubcategoryWhereInputSchema } from '../inputTypeSchemas/SubcategoryWhereInputSchema'

export const SubcategoryUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.SubcategoryUpdateManyAndReturnArgs> = z.object({
  data: z.union([ SubcategoryUpdateManyMutationInputSchema,SubcategoryUncheckedUpdateManyInputSchema ]),
  where: SubcategoryWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default SubcategoryUpdateManyAndReturnArgsSchema;
