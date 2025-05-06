import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { SubcategoryCreateManyInputSchema } from '../inputTypeSchemas/SubcategoryCreateManyInputSchema'

export const SubcategoryCreateManyAndReturnArgsSchema: z.ZodType<Prisma.SubcategoryCreateManyAndReturnArgs> = z.object({
  data: z.union([ SubcategoryCreateManyInputSchema,SubcategoryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default SubcategoryCreateManyAndReturnArgsSchema;
