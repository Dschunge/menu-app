import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { SubSubcategoryCreateManyInputSchema } from '../inputTypeSchemas/SubSubcategoryCreateManyInputSchema'

export const SubSubcategoryCreateManyAndReturnArgsSchema: z.ZodType<Prisma.SubSubcategoryCreateManyAndReturnArgs> = z.object({
  data: z.union([ SubSubcategoryCreateManyInputSchema,SubSubcategoryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default SubSubcategoryCreateManyAndReturnArgsSchema;
