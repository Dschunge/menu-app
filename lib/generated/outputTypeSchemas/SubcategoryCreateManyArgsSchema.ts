import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { SubcategoryCreateManyInputSchema } from '../inputTypeSchemas/SubcategoryCreateManyInputSchema'

export const SubcategoryCreateManyArgsSchema: z.ZodType<Prisma.SubcategoryCreateManyArgs> = z.object({
  data: z.union([ SubcategoryCreateManyInputSchema,SubcategoryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default SubcategoryCreateManyArgsSchema;
