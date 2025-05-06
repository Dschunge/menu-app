import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { SubSubcategoryCreateManyInputSchema } from '../inputTypeSchemas/SubSubcategoryCreateManyInputSchema'

export const SubSubcategoryCreateManyArgsSchema: z.ZodType<Prisma.SubSubcategoryCreateManyArgs> = z.object({
  data: z.union([ SubSubcategoryCreateManyInputSchema,SubSubcategoryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default SubSubcategoryCreateManyArgsSchema;
